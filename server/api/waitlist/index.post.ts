import { waitlist } from "~~/packages/database/schema";
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
    await useDrizzle()
      .insert(waitlist)
      .values({
        email: data.email,
      })
      .onConflictDoNothing({ target: waitlist.email });
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
