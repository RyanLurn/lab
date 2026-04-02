import { Textarea } from "@lab/ui/components/textarea";
import { toast } from "@lab/ui/components/toaster";
import { useState } from "react";

export function PromptBox() {
  const [prompt, setPrompt] = useState("");

  function send() {
    if (prompt.trim()) {
      toast.info("Sent message.");
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
      className="w-full"
      value={prompt}
    />
  );
}
