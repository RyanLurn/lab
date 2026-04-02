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
    <div className="sticky bottom-5 mt-15 max-h-1/2 w-full max-w-4/5 rounded-md bg-card">
      <Textarea
        onKeyDown={(e) => {
          if (!e.ctrlKey && !e.shiftKey && e.key === "Enter") {
            e.preventDefault();
            send();
          }
        }}
        className="max-h-full min-h-26 text-lg md:text-lg"
        onChange={(e) => setPrompt(e.target.value)}
        value={prompt}
      />
    </div>
  );
}
