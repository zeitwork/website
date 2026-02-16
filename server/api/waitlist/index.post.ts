import { waitlist } from "~~/packages/database/schema";
import { isNull } from "drizzle-orm";
import { nanoid } from "nanoid";
import { z } from "zod";

const bodySchema = z.object({
  email: z.string().email(),
});

export default defineEventHandler(async (event) => {
  const { data, success } = await readValidatedBody(event, bodySchema.safeParse);
  if (!success) {
    return sendError(
      event,
      createError({ statusCode: 400, statusMessage: "Invalid request body" }),
    );
  }

  try {
    const token = nanoid();

    const [row] = await useDrizzle()
      .insert(waitlist)
      .values({
        email: data.email,
        confirmationToken: token,
      })
      .onConflictDoUpdate({
        target: waitlist.email,
        set: { confirmationToken: token },
        where: isNull(waitlist.confirmedAt),
      })
      .returning({ id: waitlist.id, confirmedAt: waitlist.confirmedAt });

    if (row && !row.confirmedAt) {
      await sendConfirmationEmail(data.email, token);
    }
  } catch (error) {
    console.error(error);
    return sendError(
      event,
      createError({ statusCode: 500, statusMessage: "Internal server error" }),
    );
  }

  return {
    success: true,
  };
});
