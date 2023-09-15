"use client";

import { Card, CardBody, CardHeader } from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import Navigationbar from "@/components/Navigationbar";

export default function Home() {
  return (
    <NextUIProvider>
      <Navigationbar />
      <section className="min-h-screen px-20 py-[12rem] flex flex-col justify-center background4">
        <Card className="bg-white/50">
          <CardHeader className="font-bold text-2xl pt-12 pb-0 px-12">
            ¿Quenes somos?
          </CardHeader>
          <CardBody className="font-semibold text-xl p-12 pt-6">
            <p>
              Somos una empresa familiar que comenzó en el 2002, con una sola
              camioneta. De a poco fuimos generando confianza en los clientes de
              Bariloche, y estos nos trajeron mas clientes.
            </p>
            <p>
              Luego pudimos adquiir otra camioneta para viajar hacia San martin
              y Junin.
            </p>
            <p>
              Al cabo de 10 años ya teniamos 3 camionetas y 1 camion. Nuestro
              trabajo y dedicacion hizo que el 70% de las empresas locales
              confien en nuestros servicios para el transporte de su mercaderia,
              asi como clientes unipersonales para el transporte de pequeños
              paquetes.
            </p>
            <p>
              Ha sido un largo camino de aprendizaje. Hoy en dia nos
              consideramos los mejores en lo que hacemos, con mas de 5
              camionetas y 1 camion que viajan constantemente por toda la zona.
            </p>
            <p>
              Agradecemos a todos nuestros clientes por confiar diariamente en
              nosotros!
            </p>
          </CardBody>
        </Card>
      </section>
    </NextUIProvider>
  );
}
