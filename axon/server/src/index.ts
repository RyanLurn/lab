import { AXON_SERVER_PORT } from "@lab/core/constants/ports";
import { Hono } from "hono";

import { db } from "@/mock-db";

const app = new Hono()
  .get("/", (c) => c.text("Hello Bun!"))
  .get("/chat-messages", (context) => {
    return context.json({ chatMessages: db.chatMessages });
  });

export default {
  port: AXON_SERVER_PORT,
  fetch: app.fetch,
};
