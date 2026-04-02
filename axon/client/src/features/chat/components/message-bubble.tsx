import { cn } from "@lab/ui/lib/utils";

import type { ChatMessage } from "@/features/chat/types";

export function MessageBubble({ content, role }: ChatMessage) {
  return (
    <div
      className={cn(
        "w-full max-w-4/5 rounded-md bg-secondary",
        role === "user" ? "self-end" : ""
      )}
    >
      <p className="text-secondary-foreground">{content}</p>
    </div>
  );
}
