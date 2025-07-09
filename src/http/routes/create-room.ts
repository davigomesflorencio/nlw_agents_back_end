import { type FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schemas/index.ts";
import { z } from "zod";

export const createRoomRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/rooms",
    {
      schema: z.object({
        name: z.string().min(1, "Name is required"),
        description: z.string().optional().default(""),
      }),
    },
    async ({ body }, reply) => {
      const { name, description } = body as {
        name: string;
        description: string;
      };
      const result = await db
        .insert(schema.rooms)
        .values({ name, description })
        .returning();

      if (!result[0]) {
        return reply.status(500).send({ error: "Failed to create room" });
      }

      return reply.status(201).send({ roomId: result[0].id });
    }
  );
};
