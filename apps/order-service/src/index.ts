import Fastify from "fastify";
import { clerkPlugin } from "@clerk/fastify";  // استيراد مسمى
import { shouldBeUser } from "./middleware/authMiddleware.js";

const fastify = Fastify();
fastify.register(clerkPlugin);  

fastify.get("/health", (request, reply) => {
  return reply.status(200).send({
    status: "ok",
    uptime: process.uptime(),
    timestamp: Date.now(),
  });
});

fastify.get("/test", { preHandler: shouldBeUser}, (request, reply) => {
  return reply.send({ message: "Order service is authenticate",userId:request.userId });
});

const start = async () => {
  try {
    await fastify.listen({ port: 8001 });
    console.log("Order service is running on port 8001");
  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

start();