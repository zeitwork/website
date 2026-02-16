import { waitlist } from "~~/packages/database/schema";
import { count } from "drizzle-orm";

export default defineCachedEventHandler(
  async (event) => {
    try {
      const [result] = await useDrizzle()
        .select({
          sum: count(waitlist.id),
        })
        .from(waitlist);

      return {
        count: result.sum ?? 0,
      };
    } catch (error) {
      console.error(error);
      return sendError(
        event,
        createError({ statusCode: 500, statusMessage: "Internal server error" }),
      );
    }
  },
  { maxAge: 60 /* 1 minute */ },
);
