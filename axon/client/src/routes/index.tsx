import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@lab/ui/components/button";
import { toast } from "@lab/ui/components/toaster";

export const Route = createFileRoute("/")({ component: IndexPage });

function IndexPage() {
  return (
    <div className="flex h-dvh flex-col items-center justify-center gap-y-2">
      <h1 className="text-2xl font-bold">Home</h1>
      <Button onClick={() => toast.success("Yippee!")}>Click me!</Button>
    </div>
  );
}
