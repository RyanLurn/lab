import { upgradeWebSocket } from "hono/bun";
import { Hono } from "hono";
import { z } from "zod";

import { ChatMessageSchema } from "@/mock-db/schema";
import { db } from "@/mock-db";

export const EnvelopeSchema = z.discriminatedUnion("type", [
  z.object({ newMessage: ChatMessageSchema, type: "NEW_MESSAGE" }),
]);

export const app = new Hono()
  .get("/", (context) => context.text("Hello Bun!"))
  .get("/chat-messages", (context) => {
    return context.json({ chatMessages: db.chatMessages });
  })
  .get(
    "/ws",
    upgradeWebSocket(() => {
      return {
        onClose: (evt, ws) => {
          console.log("Connection closed.", { evt, ws });
        },
        onMessage(evt, ws) {
          console.log("Message received:", { evt, ws });
        },
        onOpen(evt, ws) {
          console.log("Connection opened.", { evt, ws });
        },
      };
    })
  );
