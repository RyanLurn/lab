import { createFileRoute } from "@tanstack/react-router";
import { toast } from "@lab/ui/components/toaster";
import { useState } from "react";

import type { ChatMessage } from "@/features/chat/types";

import { MessageList } from "@/features/chat/components/message-list";
import { PromptBox } from "@/features/chat/components/prompt-box";

export const Route = createFileRoute("/chat")({
  component: ChatPage,
});

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

function ChatPage() {
  const [chatMessages, setChatMessages] =
    useState<ChatMessage[]>(initialMessages);

  function sendUserMessage(prompt: string) {
    const newMessage: ChatMessage = {
      id: crypto.randomUUID(),
      content: prompt,
      role: "user",
    };

    setChatMessages((prev) => [...prev, newMessage]);

    toast.info("Sent message.");
  }

  return (
    <div className="mx-auto flex size-full max-w-2xl flex-col items-center pt-5">
      <MessageList chatMessages={chatMessages} />
      <PromptBox sendUserMessage={sendUserMessage} />
    </div>
  );
}
