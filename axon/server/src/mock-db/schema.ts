import { z } from "zod";

export const ChatMessageSchema = z.object({
  role: z.enum(["user", "assistant"]),
  content: z.string(),
  id: z.uuid(),
});

export type ChatMessage = z.infer<typeof ChatMessageSchema>;
