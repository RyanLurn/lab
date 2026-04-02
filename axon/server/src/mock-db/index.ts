import type { ChatMessage } from "@/mock-db/schema";

const initialMessages: ChatMessage[] = [
  {
    id: crypto.randomUUID(),
    content: "Hello there!",
    role: "user",
  },
  {
    content: "Hi, how can I help you today?",
    id: crypto.randomUUID(),
    role: "assistant",
  },
  {
    id: crypto.randomUUID(),
    content: "Who are you?",
    role: "user",
  },
  {
    content: "I'm Axon, an AI agent.",
    id: crypto.randomUUID(),
    role: "assistant",
  },
];

export const db: { chatMessages: ChatMessage[] } = {
  chatMessages: initialMessages,
};
