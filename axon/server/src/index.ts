import { upgradeWebSocket } from "hono/bun";
import { Hono } from "hono";

import { db } from "@/mock-db";

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
