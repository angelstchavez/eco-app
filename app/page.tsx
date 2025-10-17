"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center h-screen bg-muted">
      <h1 className="text-xl mb-2 text-center">Ingeniería Económica</h1>
      <Button
        onClick={() => router.push("/dashboard")}
        className="cursor-pointer"
      >
        Empezar
      </Button>
    </main>
  );
}
