"use client";

import Link from "next/link";
import { ChevronRight } from "lucide-react";
import {
  HiCalculator,
  HiTrendingUp,
  HiCash,
  HiCurrencyDollar,
  HiChartBar,
} from "react-icons/hi";
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
      {
        title: "Cálculo de Interés",
        url: "/dashboard/primer-corte/calculo-interes",
        icon: <HiCalculator className="text-base" />,
      },
      {
        title: "Interés Simple",
        url: "/dashboard/primer-corte/interes-simple",
        icon: <HiTrendingUp className="text-base" />,
      },
      {
        title: "Interés Compuesto",
        url: "/dashboard/primer-corte/interes-compuesto",
        icon: <HiCash className="text-base" />,
      },
      {
        title: "Anualidades",
        url: "/dashboard/primer-corte/anualidades",
        icon: <HiCurrencyDollar className="text-base" />,
      },
    ],
  },
  {
    title: "Segundo Corte",
    items: [
      {
        title: "Gradientes y Series Variables",
        url: "/dashboard/segundo-corte/gradientes-series",
        icon: <HiChartBar className="text-base" />,
      },
      {
        title: "Sistemas de Amortización",
        url: "/dashboard/segundo-corte/sistemas-amortizacion",
        icon: <HiCash className="text-base" />,
      },
      {
        title: "Sistemas de Capitalización",
        url: "/dashboard/segundo-corte/sistemas-capitalizacion",
        icon: <HiCurrencyDollar className="text-base" />,
      },
      {
        title: "Tasa Interna de Retorno (TIR)",
        url: "/dashboard/segundo-corte/tir",
        icon: <HiTrendingUp className="text-base" />,
      },
    ],
  },
  {
    title: "Tercer Corte",
    items: [
      { title: "Texto 1", url: "/dashboard/tercer-corte/texto1", icon: null },
      { title: "Texto 2", url: "/dashboard/tercer-corte/texto2", icon: null },
      { title: "Texto 3", url: "/dashboard/tercer-corte/texto3", icon: null },
    ],
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      {/* HEADER */}
      <SidebarHeader className="bg-white dark:bg-neutral-900 h-12 flex items-center justify-center border-b px-4">
        <span className="text-lg font-semibold tracking-tighter">
          Ingeniería Económica
        </span>
      </SidebarHeader>

      {/* CONTENIDO */}
      <SidebarContent className="bg-white dark:bg-neutral-900">
        {menu.map((section) => (
          <SidebarGroup key={section.title}>
            <Collapsible className="group/collapsible">
              <SidebarMenuItem>
                {/* TITULO DE CORTE */}
                <CollapsibleTrigger asChild>
                  <SidebarMenuButton className="border text-sm py-1 font-medium">
                    {section.title}
                    <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                  </SidebarMenuButton>
                </CollapsibleTrigger>

                {/* SUBITEMS */}
                <CollapsibleContent>
                  <SidebarMenuSub className="border-b rounded-l rounded-2xl">
                    {section.items.map((item) => (
                      <SidebarMenuSubItem key={item.title}>
                        <Link
                          href={item.url}
                          className="flex items-center gap-2 px-3 py-1.5 rounded-md text-xs hover:bg-gray-100 dark:hover:bg-neutral-800 focus:bg-gray-100 dark:focus:bg-neutral-800 transition-colors"
                        >
                          {item.icon ? item.icon : null}
                          <span>{item.title}</span>
                        </Link>
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
