"use client";

import { useEffect } from "react";
import Header from "@/components/ui/Header";
import { Main } from "@/components/ui/Main";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme } = useTheme();

  useEffect(() => {
    require("../../node_modules/bootstrap/dist/js/bootstrap.bundle.min.js");
  }, []);

  return (
    <div className="bg-body min-vh-100" data-bs-theme={theme || "dark"}>
      <Header/>
      <Main/>
    </div>
  );
}