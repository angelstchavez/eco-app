"use client";

import { ChevronRight } from "lucide-react";
import {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubItem,
} from "@/components/ui/sidebar";

const menu = [
  {
    title: "Primer Corte",
    items: [
      { title: "Texto 1", url: "/primer-corte/texto1" },
      { title: "Texto 2", url: "/primer-corte/texto2" },
      { title: "Texto 3", url: "/primer-corte/texto3" },
    ],
  },
  {
    title: "Segundo Corte",
    items: [
      { title: "Texto 1", url: "/segundo-corte/texto1" },
      { title: "Texto 2", url: "/segundo-corte/texto2" },
      { title: "Texto 3", url: "/segundo-corte/texto3" },
    ],
  },
  {
    title: "Tercer Corte",
    items: [
      { title: "Texto 1", url: "/tercer-corte/texto1" },
      { title: "Texto 2", url: "/tercer-corte/texto2" },
      { title: "Texto 3", url: "/tercer-corte/texto3" },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader className="bg-white dark:dark:bg-neutral-900 h-12 flex items-center justify-center border-b px-4">
        <span className="text-lg font-semibold tracking-tighter">Ingeniería Económica</span>
      </SidebarHeader>

      <SidebarContent className="space-y-0 bg-white dark:dark:bg-neutral-900">
        {menu.map((section) => (
          <SidebarGroup key={section.title}>
            <Collapsible className="group/collapsible">
              <SidebarMenuItem>
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="border text-sm py-1">
                    {section.title}
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>
                <CollapsibleContent>
                  <SidebarMenuSub>
                    {section.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <a href={item.url}>{item.title}</a>
                      </SidebarMenuSubItem>
                    ))}
                  </SidebarMenuSub>
                </CollapsibleContent>
              </SidebarMenuItem>
            </Collapsible>
          </SidebarGroup>
        ))}
      </SidebarContent>
    </Sidebar>
  );
}
