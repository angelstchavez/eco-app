"use client";

import TabsGenerator from "@/components/ui/tabs-generator";
import {
  HiCurrencyDollar,
  HiSwitchHorizontal,
  HiTrendingUp,
  HiTrendingDown,
} from "react-icons/hi";

export default function AnualidadesPage() {
  const tabs = [
    {
      value: "anualidad-anticipada",
      label: "Anualidad Anticipada",
      icon: <HiSwitchHorizontal />,
      content: (
        <p>
          Aquí puedes calcular los valores relacionados con una{" "}
          <strong>Anualidad Anticipada</strong>.
        </p>
      ),
    },
    {
      value: "anualidad-ordinaria",
      label: "Anualidad Ordinaria",
      icon: <HiCurrencyDollar />,
      content: (
        <p>
          Aquí puedes calcular los valores de una{" "}
          <strong>Anualidad Ordinaria</strong>.
        </p>
      ),
    },
    {
      value: "valor-futuro",
      label: "Valor Futuro",
      icon: <HiTrendingUp />,
      content: (
        <p>
          Aquí puedes determinar el <strong>Valor Futuro</strong> de una
          anualidad.
        </p>
      ),
    },
    {
      value: "valor-presente",
      label: "Valor Presente",
      icon: <HiTrendingDown />,
      content: (
        <p>
          Aquí puedes determinar el <strong>Valor Presente</strong> de una
          anualidad.
        </p>
      ),
    },
  ];

  return <TabsGenerator title="Anualidades" tabs={tabs} />;
}
