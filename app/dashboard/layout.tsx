import { cookies } from "next/headers";
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";
import { AppSidebar } from "@/components/dashboard/sidebar/app-sidebar";
import { ThemeToggle } from "@/components/theme/theme-toggle";

export default async function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";

  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="flex flex-col w-full h-screen">
        <header className="dark:bg-neutral-900 flex items-center justify-between border-b px-2 py-2 h-12">
          <SidebarTrigger />
          <ThemeToggle />
        </header>

        <div className="flex-1 overflow-auto p-4 bg-muted">{children}</div>

        <footer className="dark:bg-neutral-900 flex items-center justify-center border-t h-12 text-sm text-neutral-500">
          Universidad Popular del Cesar — Ingeniería de Sistemas
        </footer>
      </main>
    </SidebarProvider>
  );
}
