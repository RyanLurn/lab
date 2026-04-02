import { Textarea } from "@lab/ui/components/textarea";
import { useState } from "react";

export function PromptBox({
  sendUserMessage,
}: {
  sendUserMessage: (prompt: string) => void;
}) {
  const [prompt, setPrompt] = useState("");

  function send() {
    if (prompt.trim()) {
      sendUserMessage(prompt);
      setPrompt("");
    }
  }

  return (
    <Textarea
      onKeyDown={(e) => {
        if (!e.ctrlKey && !e.shiftKey && e.key === "Enter") {
          send();
        }
      }}
      onChange={(e) => setPrompt(e.target.value)}
      className="sticky bottom-5 mt-15 w-full"
      value={prompt}
    />
  );
}
