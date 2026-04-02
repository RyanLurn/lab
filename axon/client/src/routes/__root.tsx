import { ModeToggle } from "@lab/ui/features/theme/components/mode-toggle";
import { ThemeProvider } from "@lab/ui/features/theme/components/provider";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "@lab/ui/components/toaster";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <ThemeProvider>
      <Toaster position="top-center" closeButton richColors />
      <div className="flex h-dvh flex-col items-center">
        <Outlet />
      </div>
      <ModeToggle className="fixed top-4 right-4 z-50" />
    </ThemeProvider>
  );
}
