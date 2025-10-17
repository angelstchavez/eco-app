"use client";

import TabsGenerator from "@/components/ui/tabs-generator";
import { HiCurrencyDollar, HiTrendingUp, HiClock } from "react-icons/hi";

export default function InteresSimplePage() {
  const tabs = [
    {
      value: "monto-futuro",
      label: "Monto Futuro",
      icon: <HiCurrencyDollar />,
      content: <p>Aquí puedes calcular el monto futuro de una anualidad.</p>,
    },
    {
      value: "tasa-interes",
      label: "Tasa de Interés",
      icon: <HiTrendingUp />,
      content: <p>Aquí puedes calcular la tasa de interés requerida.</p>,
    },
    {
      value: "tiempo-necesario",
      label: "Tiempo Necesario",
      icon: <HiClock />,
      content: (
        <p>Aquí puedes calcular el tiempo necesario para alcanzar un monto.</p>
      ),
    },
  ];

  return <TabsGenerator title="Interés Simple" tabs={tabs} />;
}
