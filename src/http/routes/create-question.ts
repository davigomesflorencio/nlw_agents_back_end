import { type FastifyPluginAsyncZod } from "fastify-type-provider-zod";
import { db } from "../../db/connection.ts";
import { schema } from "../../db/schemas/index.ts";
import { z } from "zod";

export const createQuestionRoute: FastifyPluginAsyncZod = async (app) => {
  app.post(
    "/rooms/:roomId/questions",
    {
      schema: {
        params: z.object({
          roomId: z.string().uuid(),
        }),
        body: z.object({
          question: z.string().min(1),
        }),
      },
    },
    async (request, reply) => {
      const { roomId } = request.params as { roomId: string };
      const { question } = request.body;
      const result = await db
        .insert(schema.questions)
        .values({ roomId, question })
        .returning();

      if (!result[0]) {
        return reply.status(500).send({ error: "Failed to create question" });
      }

      return reply.status(201).send({ questionId: result[0].id });
    }
  );
};
