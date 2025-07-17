import { Calendar, Home, Inbox, Search } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";

// Menu items.
const items = [
  {
    title: "Home",
    url: "/",
    icon: Home,
  },
  {
    title: "My files",
    url: "/files",
    icon: Inbox,
  },
  {
    title: "My account",
    url: "/profile",
    icon: Calendar,
  },
  {
    title: "Upload new files",
    url: "/upload",
    icon: Search,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>FileCraft</SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton asChild>
                <a href={item.url}>
                  <item.icon />
                  <span>{item.title}</span>
                </a>
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
    </Sidebar>
  );
}
