import { waitlist } from "~~/packages/database/schema";
import { z } from "zod";

const querySchema = z.object({
  token: z.string().min(1),
});

export default defineEventHandler(async (event) => {
  const { data, success } = await getValidatedQuery(event, querySchema.safeParse);
  if (!success) {
    return sendRedirect(event, "/waitlist?confirmed=invalid");
  }

  try {
    const token = data.token;
    const [entry] = await useDrizzle()
      .select({
        id: waitlist.id,
        email: waitlist.email,
        confirmedAt: waitlist.confirmedAt,
      })
      .from(waitlist)
      .where(eq(waitlist.confirmationToken, token));

    if (!entry) {
      return sendRedirect(event, "/waitlist?confirmed=invalid");
    }

    if (entry.confirmedAt) {
      return sendRedirect(event, "/waitlist?confirmed=already");
    }

    // Confirm the email
    await useDrizzle()
      .update(waitlist)
      .set({
        confirmedAt: new Date(),
        confirmationToken: null,
      })
      .where(eq(waitlist.id, entry.id));

    // Send welcome email
    await sendWelcomeEmail(entry.email);

    return sendRedirect(event, "/waitlist?confirmed=true");
  } catch (error) {
    console.error(error);
    return sendRedirect(event, "/waitlist?confirmed=error");
  }
});
