import { Calendar, Users, Scissors, Package, BarChart3, Settings, Home, CreditCard, Building2 } from "lucide-react";
import { NavLink } from "@/components/NavLink";
import { Sidebar, SidebarContent, SidebarGroup, SidebarGroupContent, SidebarGroupLabel, SidebarMenu, SidebarMenuButton, SidebarMenuItem, SidebarTrigger, SidebarHeader, useSidebar } from "@/components/ui/sidebar";
const menuItems = [{
  title: "Dashboard",
  url: "/dashboard",
  icon: Home
}, {
  title: "Appointments",
  url: "/appointments",
  icon: Calendar
}, {
  title: "Clients",
  url: "/clients",
  icon: Users
}, {
  title: "Staff",
  url: "/staff",
  icon: Users
}, {
  title: "Services",
  url: "/services",
  icon: Scissors
}, {
  title: "Inventory",
  url: "/inventory",
  icon: Package
}, {
  title: "Payments",
  url: "/payments",
  icon: CreditCard
}, {
  title: "Analytics",
  url: "/analytics",
  icon: BarChart3
}];
const settingsItems = [{
  title: "Branches",
  url: "/branches",
  icon: Building2
}, {
  title: "Settings",
  url: "/settings",
  icon: Settings
}];
export function AppSidebar() {
  const {
    open
  } = useSidebar();
  return <Sidebar collapsible="icon" className="border-r border-sidebar-border mx-0 px-0">
      <SidebarHeader className="border-b border-sidebar-border px-4 py-4">
        
      </SidebarHeader>

      

      <div className="p-4 border-t border-sidebar-border">
        <SidebarTrigger className="w-full" />
      </div>
    </Sidebar>;
}