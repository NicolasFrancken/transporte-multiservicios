"use client";

import {
  Card,
  CardBody,
  Button,
  Image,
  Tabs,
  Tab,
  Link,
} from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import Navigationbar from "@/components/Navigationbar";
import dynamic from "next/dynamic";

const ScrollCarousel = dynamic(
  () => import("@/components/ScrollCarouselComponent"),
  { ssr: false }
);

export default function Home() {
  return (
    <NextUIProvider>
      <Navigationbar />

      <section className="min-h-screen px-20 pt-40 pb-[12rem] background flex flex-col justify-between">
        <div className="w-[65rem]">
          <h1 className="font-bold text-8xl text-white">
            SERVICIO DIARIO <br /> DE
            <span className="text-orange-500"> CARGAS RAPIDAS</span>
          </h1>
          <p className="font-bold text-3xl text-black mt-4">
            ENRTEGA Y RETIRO A DOMICILIO
          </p>
        </div>
        <Card
          className="border-none bg-white/50 max-w-7xl self-center"
          shadow="lg"
          radius="lg"
        >
          <CardBody>
            <p className="font-bold text-5xl text-center">
              BARILOCHE - SAN MARTIN - JUNIN - EL BOLSON - VILLA LA ANGOSTURA -
              NEUQUEN
            </p>
          </CardBody>
        </Card>
        <Button
          className="fixed w-fit h-fit bg-transparent bottom-0 right-0 p-0 mx-6 my-6 z-10"
          radius="full"
        >
          <Image src={"/WhatsApp.webp"} alt="WhatsApp" width={70} height={70} />
        </Button>
      </section>
      <section className="py-12 bg-gray-300">
        <ScrollCarousel />
      </section>
      <section
        className="min-h-screen px-20 pt-40 pb-[12rem] bg-orange-500/70 flex flex-col"
        id="envios"
      >
        <h2 className="font-bold text-4xl">¿Como hago un ENVIO?</h2>
        <div className="w-[60rem] flex flex-col justify-center items-center self-center mt-32">
          <Tabs
            size={"lg"}
            className="font-bold py-3"
            radius={"lg"}
            color={"default"}
          >
            <Tab
              key="bariloche"
              title="Bariloche"
              className="flex flex-col px-6 py-6"
            >
              <Card className="m-0">
                <CardBody className="font-semibold text-3xl inline text-center p-7">
                  En <span className="text-orange-500">Bariloche </span>
                  contamos con una sucurlas en la calle{" "}
                  <span className="text-orange-500">Mitre 1360</span>. Podes
                  acercarte y dejar tu paquete o escribirnos a nuestro WhatsApp!
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="sanmartin"
              title="San Martin"
              className="flex flex-col px-6 py-6"
            >
              <Card className="m-0">
                <CardBody className="font-semibold text-3xl inline text-center p-7">
                  En <span className="text-orange-500">Bariloche </span>
                  contamos con una sucurlas en la calle{" "}
                  <span className="text-orange-500">Mitre 1360</span>. Podes
                  acercarte y dejar tu paquete o escribirnos a nuestro WhatsApp!
                </CardBody>
              </Card>
            </Tab>
            <Tab key="junin" title="Junin" className="flex flex-col px-6 py-6">
              <Card className="m-0">
                <CardBody className="font-semibold text-3xl inline text-center p-7">
                  En <span className="text-orange-500">Bariloche </span>
                  contamos con una sucurlas en la calle{" "}
                  <span className="text-orange-500">Mitre 1360</span>. Podes
                  acercarte y dejar tu paquete o escribirnos a nuestro WhatsApp!
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="villa"
              title="Villa la Angostura"
              className="flex flex-col px-6 py-6"
            >
              <Card className="m-0">
                <CardBody className="font-semibold text-3xl inline text-center p-7">
                  En <span className="text-orange-500">Bariloche </span>
                  contamos con una sucurlas en la calle{" "}
                  <span className="text-orange-500">Mitre 1360</span>. Podes
                  acercarte y dejar tu paquete o escribirnos a nuestro WhatsApp!
                </CardBody>
              </Card>
            </Tab>
            <Tab
              key="neuquen"
              title="Neuquen"
              className="flex flex-col px-6 py-6"
            >
              <Card className="m-0">
                <CardBody className="font-semibold text-3xl inline text-center p-7">
                  En <span className="text-orange-500">Bariloche </span>
                  contamos con una sucurlas en la calle{" "}
                  <span className="text-orange-500">Mitre 1360</span>. Podes
                  acercarte y dejar tu paquete o escribirnos a nuestro WhatsApp!
                </CardBody>
              </Card>
            </Tab>
          </Tabs>
          <Link
            className="self-end font-semibold text-2xl mt-4"
            isBlock
            showAnchorIcon
            href="#"
            color="foreground"
          >
            ¿Como envalo mi paquete?
          </Link>
        </div>
      </section>
    </NextUIProvider>
  );
}
