import { Hono } from "hono";

import { db } from "@/mock-db";

export const app = new Hono()
  .get("/", (c) => c.text("Hello Bun!"))
  .get("/chat-messages", (context) => {
    return context.json({ chatMessages: db.chatMessages });
  });
