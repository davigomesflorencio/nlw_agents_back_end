import { pgTable, text, timestamp, uuid } from "drizzle-orm/pg-core";

export const rooms = pgTable("rooms", {
  id: uuid("id").primaryKey().defaultRandom(),
  name: text().notNull(),
  description: text().notNull(),
  createdAt: timestamp().defaultNow().notNull(),
});
