import { SidebarProvider } from "@/components/ui/sidebar";
import { Outlet } from "react-router-dom";
import { StylistHeader } from "../components/StylistHeader";

export const StylistLayout = () => {
  return (
    <SidebarProvider>
      <div className="min-h-screen flex w-full flex-col bg-background">
        <StylistHeader />
        <main className="flex-1 p-6">
          <Outlet />
        </main>
      </div>
    </SidebarProvider>
  );
};
