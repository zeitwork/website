import { uuid, timestamp, pgTable, text } from "drizzle-orm/pg-core";
import { uuidv7 } from "uuidv7";

export const waitlist = pgTable("waitlist", {
  id: uuid().primaryKey().$defaultFn(uuidv7),
  email: text().notNull().unique(),
  confirmationToken: text().unique(),
  confirmedAt: timestamp({ withTimezone: true }),
  createdAt: timestamp({ withTimezone: true }).notNull().defaultNow(),
});
