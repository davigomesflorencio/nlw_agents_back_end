import { reset, seed } from "drizzle-seed";
import { schema } from "./schemas/index.ts";
import { db, sql } from "./connection.ts";

await reset(db, schema);

await seed(db, schema).refine((f) => {
  return {
    rooms: {
      count: 5,
      columns: {
        name: f.companyName(),
        description: f.loremIpsum(),
      },
      with: {
        questions: 5,
      },
    },
  };
});

await sql.end();

// // biome:ignore lint/suspicious/noConsoleLog: only used =in DEV
// console.log("Database reset and seeded successfully.");
