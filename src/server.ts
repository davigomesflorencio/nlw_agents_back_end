import { fastify } from "fastify";
import {
  serializerCompiler,
  validatorCompiler,
  type ZodTypeProvider,
} from "fastify-type-provider-zod";
import { fastifyCors } from "@fastify/cors";
import { env } from "./env.ts";
import { getRoomsRoute } from "./http/routes/get-rooms.ts";
import { createRoomRoute } from "./http/routes/create-room.ts";
import { getRoomsQuestionsRoute } from "./http/routes/get-rooms-questions.ts";
import { createQuestionRoute } from "./http/routes/create-question.ts";

const app = fastify().withTypeProvider<ZodTypeProvider>();

// app.register(fastifyCors, {
//   origin: "http:localhost:5173",
// });

app.register(fastifyCors, { origin: "*" });

app.setValidatorCompiler(validatorCompiler);
app.setSerializerCompiler(serializerCompiler);

app.get("/health", async () => {
  return { message: "Hello, world!" };
});

app.register(getRoomsRoute);
app.register(createRoomRoute);
app.register(getRoomsQuestionsRoute);
app.register(createQuestionRoute);

app
  .listen({
    port: env.PORT ? Number(env.PORT) : 3333,
  })
  .then(() => {
    console.log("Server is running on http://localhost:3333");
  })
  .catch((err) => {
    console.error("Error starting server:", err);
    process.exit(1);
  });
