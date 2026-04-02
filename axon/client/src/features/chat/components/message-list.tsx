import type { ChatMessage } from "@/features/chat/types";

import { MessageBubble } from "@/features/chat/components/message-bubble";

export function MessageList({ chatMessages }: { chatMessages: ChatMessage[] }) {
  return (
    <div className="flex w-full flex-1 flex-col items-start gap-y-4">
      {chatMessages.map((chatMessage) => (
        <MessageBubble key={chatMessage.id} {...chatMessage} />
      ))}
    </div>
  );
}
