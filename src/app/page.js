"use client";

import {
  Card,
  CardBody,
  Button,
  Image,
  Link,
  useDisclosure,
  Chip,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { useRouter } from "next/navigation";

import { NextUIProvider } from "@nextui-org/react";
import dynamic from "next/dynamic";

import Navigationbar from "@/components/Navigationbar";
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
  const router = useRouter();

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

  const itemClasses = {
    title: "md:text-2xl",
  };

  return (
    <NextUIProvider>
      <Navigationbar />
      <section
        className="md:min-h-screen px-8 pt-28 pb-20 lg:px-28 lg:pt-40 background1 flex flex-col justify-between"
        id="main"
      >
        <div className="xl:w-[65rem] flex flex-col items-center lg:items-start lg:text-start">
          <h1 className="font-bold text-4xl md:text-5xl lg:text-6xl xl:text-8xl text-white text-center lg:text-start">
            SERVICIO DIARIO <br /> DE <br className="lg:hidden" />
            <span className="text-orange-500">CARGAS RÁPIDAS</span>
          </h1>
          <p className="font-bold text-lg md:text-xl lg:text-3xl xl:text-5xl text-white mt-2 lg:mt-4 text-center lg:text-start">
            ENTREGA Y RETIRO A DOMICILIO
          </p>
        </div>
        <Button
          radius="full"
          className="bg-orange-500 font-semibold lg:font-bold md:text-lg lg:text-xl xl:text-3xl text-white self-center mt-4 mb-7 md:my-20"
          as={Link}
          href="#envios"
          size="lg"
        >
          Quiero hacer un envío
        </Button>
        <div className="w-full xl:w-[60rem] flex self-center">
          <Accordion
            variant="splitted"
            isCompact={false}
            itemClasses={itemClasses}
          >
            <AccordionItem
              key="1"
              aria-label="Nuestros destinos"
              title="Nuestros destinos"
              className="font-semibold md:text-2xl"
            >
              Bariloche - San Martín de los Andes - Junín de los Andes - Villa
              la Angostura - Neuquén - El Valle - Cipolletti - El Hoyo - El
              Bolsón - Lago Puelo - Cholila - Esquel - Bahía Blanca - Trevelin
            </AccordionItem>
            <AccordionItem
              key="2"
              aria-label="También hacemos mudanzas y contrareembolsos!"
              title="También hacemos mudanzas y contrareembolsos!"
              className="font-semibold md:text-2xl"
            >
              Por mudanzas hacé tu consulta a nuestro{" "}
              <a
                href="https://wa.me/+542944554970?text=Quiero%20cotizar%20una%20mudanza!"
                className="text-green-500 underline"
              >
                WhatsApp
              </a>
              !
            </AccordionItem>
          </Accordion>
        </div>
        <Button
          className="fixed w-fit h-fit bg-transparent min-w-fit gap-unit-0 p-3 lg:p-6 bottom-0 right-0 z-10"
          radius="full"
          onClick={onOpenWpp}
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
      <div className="hidden lg:block py-24 lg:py-64 background2">
        <section className=" py-8 lg:py-12 bg-white/50">
          <ScrollCarousel />
        </section>
      </div>
      <div className="background3 relative h-full">
        <section
          className="min-h-screen px-8 py-[7rem] pb-4 lg:pb-[7rem] lg:px-28 lg:pt-40 flex flex-col text-center sm:max-lg:justify-start lg:text-start"
          id="envios"
        >
          <h2 className="font-bold text-3xl  sm:text-4xl lg:text-5xl text-white mb-20 xl:mb-0">
            ¿Cómo hago un envío?
          </h2>
          <div className="w-full xl:w-[60rem] flex flex-col justify-center items-center self-center xl:mt-32">
            <AccordionComponent />
            <Button
              className="self-center lg:self-end font-semibold texl-xl md:text-2xl mt-4  lg:mt-8 text-black bg-white"
              isBlock
              onPress={onOpenLink}
            >
              ¿Cómo despacho mi envío?
            </Button>
            <LinkModal
              isOpen={isOpenLink}
              onOpenChange={onOpenChangeLink}
              className="self-center lg:self-end font-semibold texl-xl md:text-2xl mt-4 lg:mr-6 text-black bg-white/50"
              isBlock
            />
            <Button
              className="self-center lg:self-end font-semibold texl-xl md:text-2xl mt-4  lg:mt-3 text-black bg-white"
              isBlock
              onPress={() => {
                router.push(
                  "https://wa.me/+542944554970?text=Quiero%20cotizar%20un%20envío!"
                );
              }}
            >
              Cotizá tu envío/mudanza
            </Button>
          </div>
        </section>
        <Footer />
      </div>
    </NextUIProvider>
  );
}
