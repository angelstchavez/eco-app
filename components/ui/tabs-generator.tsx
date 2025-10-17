"use client";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { ReactNode } from "react";

interface TabItem {
  value: string;
  label: string;
  icon: ReactNode;
  content: ReactNode;
}

interface TabsGeneratorProps {
  title: string;
  tabs: TabItem[];
  defaultValue?: string;
}

export default function TabsGenerator({
  title,
  tabs,
  defaultValue,
}: TabsGeneratorProps) {
  return (
    <main>
      <h1 className="text-2xl font-semibold mb-2">{title}</h1>

      <Tabs defaultValue={defaultValue ?? tabs[0]?.value}>
        <TabsList
          className={`grid ${
            tabs.length === 2
              ? "grid-cols-2"
              : tabs.length === 3
              ? "grid-cols-3"
              : "grid-cols-4"
          }`}
        >
          {tabs.map((tab) => (
            <TabsTrigger
              key={tab.value}
              value={tab.value}
              className="flex items-center justify-center gap-2"
            >
              {/* 👇 Ícono visible solo en móvil */}
              <span className="block md:hidden text-lg">{tab.icon}</span>
              <span className="hidden md:block">{tab.label}</span>
            </TabsTrigger>
          ))}
        </TabsList>

        {tabs.map((tab) => (
          <TabsContent key={tab.value} value={tab.value}>
            <div className="mt-1">{tab.content}</div>
          </TabsContent>
        ))}
      </Tabs>
    </main>
  );
}
