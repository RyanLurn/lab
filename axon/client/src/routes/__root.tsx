import { ModeToggle } from "@lab/ui/features/theme/components/mode-toggle";
import { ThemeProvider } from "@lab/ui/features/theme/components/provider";
import { createRootRoute, Outlet } from "@tanstack/react-router";
import { Toaster } from "@lab/ui/components/toaster";

export const Route = createRootRoute({ component: RootLayout });

function RootLayout() {
  return (
    <ThemeProvider>
      <Toaster position="top-center" closeButton richColors />
      <Outlet />
      <ModeToggle className="fixed top-3 right-3 z-50" />
    </ThemeProvider>
  );
}
