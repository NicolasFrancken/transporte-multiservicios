"use client";

import { Card, CardBody } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import Navigationbar from "@/components/Navigationbar";

export default function Home() {
  return (
    <NextUIProvider>
      <Navigationbar />
      <section></section>
    </NextUIProvider>
  );
}
