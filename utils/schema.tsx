import { pgTable, serial, text, varchar } from "drizzle-orm/pg-core";

export const AIOutput = pgTable("AiOutput", {
  id: serial('id').primaryKey(),
  formData: varchar('formData').notNull(),
  aiResponse: text('aiResponse'),
  templateSlug: varchar('templateSlug').notNull(),
  createdBy: varchar('createdBy'),
  createdAt: varchar('createdAt')
});
