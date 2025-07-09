import { type FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schemas/index.ts";
import z from "zod";
import { eq, desc } from "drizzle-orm";
import { id } from "zod/v4/locales";
import { create } from "domain";

export const getRoomsQuestionsRoute: FastifyPluginAsyncZod = async (app) => {
  app.get(
    "/rooms/:roomId/questions",
    {
      schema: {
        params: z.object({
          roomId: z.string().uuid("Invalid room ID format"),
        }),
      },
    },
    async (request) => {
      const { roomId } = request.params as { roomId: string };
      const results = await db
        .select({
          id: schema.questions.id,
          question: schema.questions.question,
          answer: schema.questions.answer,
          createdAt: schema.questions.createdAt,
        })
        .from(schema.questions)
        .where(eq(schema.questions.roomId, roomId))
        .orderBy(desc(schema.questions.createdAt));
      return results;
    }
  );
};
