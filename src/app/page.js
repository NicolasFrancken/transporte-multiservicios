"use client";

import {
  Card,
  CardBody,
  Button,
  Image,
  useDisclosure,
} from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import Navigationbar from "@/components/Navigationbar";
import dynamic from "next/dynamic";
import WppModal from "@/components/WppModal";
import LinkModal from "@/components/LinkModal";
import Footer from "@/components/Footer";
import AccordionComponent from "@/components/AccordionComponent";
import TabsComponent from "@/components/TabsComponent";

const ScrollCarousel = dynamic(
  () => import("@/components/ScrollCarouselComponent"),
  { ssr: false }
);

export default function Home() {
  const {
    isOpen: isOpenWpp,
    onOpen: onOpenWpp,
    onOpenChange: onOpenChangeWpp,
  } = useDisclosure();

  const {
    isOpen: isOpenLink,
    onOpen: onOpenLink,
    onOpenChange: onOpenChangeLink,
  } = useDisclosure();

  return (
    <NextUIProvider>
      <Navigationbar />
      <section
        className="min-h-screen px-8 pt-48 pb-[5rem] lg:px-28 lg:pt-40 background flex flex-col justify-between"
        id="main"
      >
        <div className="xl:w-[65rem] flex flex-col items-center lg:items-start lg:text-start">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white text-center lg:text-start">
            SERVICIO DIARIO <br /> DE
            <span className="text-orange-500"> CARGAS RAPIDAS</span>
          </h1>
          <p className="font-bold text-lg md:text-xl lg:text-3xl xl:text-5xl text-white mt-2 lg:mt-4">
            ENRTEGA Y RETIRO A DOMICILIO
          </p>
        </div>
        <Card
          className="border-none bg-white/50 max-w-7xl self-center"
          shadow="lg"
          radius="lg"
        >
          <CardBody>
            <p className="font-bold text-xl lg:text-3xl xl:text-5xl text-center">
              BARILOCHE - SAN MARTIN - JUNIN - EL BOLSON - VILLA LA ANGOSTURA -
              NEUQUEN
            </p>
          </CardBody>
        </Card>
        <Button
          className="fixed w-fit h-fit bg-transparent min-w-fit gap-unit-0 p-3 lg:p-6 bottom-0 right-0 z-10"
          radius="full"
          onPress={onOpenWpp}
        >
          <WppModal isOpen={isOpenWpp} onOpenChange={onOpenChangeWpp} />
          <Image
            src={"/WhatsApp.webp"}
            alt="WhatsApp"
            width={50}
            height={50}
            className="flex lg:hidden"
          />
          <Image
            src={"/WhatsApp.webp"}
            alt="WhatsApp"
            width={70}
            height={70}
            className="hidden lg:flex"
          />
        </Button>
      </section>
      <div className="py-24 lg:py-64 background2">
        <section className="py-8 lg:py-12 bg-white/50">
          <ScrollCarousel />
        </section>
      </div>
      <div className="background3 relative h-full">
        <section
          className="min-h-screen px-8 py-[7rem]  lg:px-28 lg:pt-40 flex flex-col text-center sm:max-lg:justify-center lg:text-start"
          id="envios"
        >
          <h2 className="font-bold text-2xl  sm:text-4xl lg:text-5xl text-white ">
            ¿Como hago un ENVIO?
          </h2>
          <div className="w-full lg:w-[60rem] flex flex-col justify-center items-center self-center lg:mt-32">
            <TabsComponent />
            <AccordionComponent />
            <Button
              className="self-center lg:self-end font-semibold texl-xl lg:text-2xl mt-4 lg:mr-6 lg:mt-3 text-black bg-white/50"
              isBlock
              onPress={onOpenLink}
            >
              ¿Como embalo mi paquete?
            </Button>
            <LinkModal isOpen={isOpenLink} onOpenChange={onOpenChangeLink} />
          </div>
        </section>
        <Footer />
      </div>
    </NextUIProvider>
  );
}
