"use client";

import {
  Card,
  CardBody,
  Button,
  Image,
  Tabs,
  Tab,
  useDisclosure,
  Accordion,
  AccordionItem,
} from "@nextui-org/react";
import { NextUIProvider } from "@nextui-org/react";
import Navigationbar from "@/components/Navigationbar";
import dynamic from "next/dynamic";
import WppModal from "@/components/WppModal";
import LinkModal from "@/components/LinkModal";
import Footer from "@/components/Footer";

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
      {/* <section
        className="min-h-screen px-8 pt-48 pb-[5rem] lg:px-28 lg:pt-40 background flex flex-col justify-between"
        id="main"
      >
        <div className="xl:w-[65rem] flex flex-col items-center lg:items-start lg:text-start">
          <h1 className="font-bold text-3xl md:text-5xl lg:text-6xl xl:text-8xl text-white text-center lg:text-start">
            SERVICIO DIARIO <br /> DE
            <span className="text-orange-500"> CARGAS RAPIDAS</span>
          </h1>
          <p className="font-bold text-sm md:text-xl lg:text-3xl xl:text-5xl text-white mt-2 lg:mt-4">
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
          className="fixed w-fit h-fit bg-transparent bottom-0 right-0 p-0 mx-3 my-3 lg:mx-6 lg:my-6 z-10"
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
      </div> */}
      <div className="background3 relative h-full">
        <section
          className="min-h-screen px-8 py-[7rem] lg:px-28 lg:pt-40 flex flex-col  "
          id="envios"
        >
          <h2 className="font-bold text-4xl text-white">
            ¿Como hago un ENVIO?
          </h2>
          <div className="w-full lg:w-[60rem] flex flex-col justify-center items-center self-center lg:mt-32">
            <Tabs
              size={"lg"}
              className="font-bold py-3 w-full lg:w-fit hidden lg:flex "
              radius={"lg"}
              color={"default"}
            >
              <Tab
                key="bariloche"
                title="Bariloche"
                className="flex flex-col px-6 py-6"
              >
                <Card className="m-0 hidden lg:flex">
                  <CardBody className="font-semibold text-3xl inline text-center p-7">
                    En <span className="text-orange-500">Bariloche </span>
                    contamos con una sucursal en la calle
                    <span className="text-orange-500"> Mitre 1360</span>. Podes
                    acercarte y dejar tu paquete o escribirnos a nuestro
                    WhatsApp!
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="sanmartin"
                title="San Martin"
                className="flex flex-col px-6 py-6"
              >
                <Card className="m-0 hidden lg:flex">
                  <CardBody className="font-semibold text-3xl inline text-center p-7">
                    En <span className="text-orange-500">San Martin </span>
                    contamos con una sucursal en la calle
                    <span className="text-orange-500"> General Roca 542</span>.
                    Podes acercarte y dejar tu paquete o escribirnos a nuestro
                    WhatsApp!
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="junin"
                title="Junin"
                className="flex flex-col px-6 py-6"
              >
                <Card className="m-0 hidden lg:flex">
                  <CardBody className="font-semibold text-3xl inline text-center p-7">
                    En <span className="text-orange-500">Junin </span>
                    no contamos con una sucursal. Podes acercarte a San Martin y
                    dejar tu paquete o escribirnos a nuestro WhatsApp y lo
                    pasamos a buscar!
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="villa"
                title="Villa la Angostura"
                className="flex flex-col px-6 py-6"
              >
                <Card className="m-0 hidden lg:flex">
                  <CardBody className="font-semibold text-3xl inline text-center p-7">
                    En
                    <span className="text-orange"> Villa La Angostura </span>
                    no contamos con sucursal. Escribirnos a nuestro WhatsApp y
                    lo pasamos a buscar!
                  </CardBody>
                </Card>
              </Tab>
              <Tab
                key="neuquen"
                title="Neuquen"
                className="flex flex-col px-6 py-6"
              >
                <Card className="m-0 hidden lg:flex">
                  <CardBody className="font-semibold text-3xl inline text-center p-7">
                    En <span className="text-orange-500">Nuequen </span>
                    no contamos con una sucursal. Escribirnos a nuestro WhatsApp
                    y lo pasamos a buscar!
                  </CardBody>
                </Card>
              </Tab>
            </Tabs>
            <Accordion variant="shadow" className="lg:hidden">
              <AccordionItem key="1" aria-label="Bariloche" title="Bariloche">
                En <span className="text-orange-500">Bariloche </span>
                contamos con una sucursal en la calle
                <span className="text-orange-500"> Mitre 1360</span>. Podes
                acercarte y dejar tu paquete o escribirnos a nuestro WhatsApp!
              </AccordionItem>
              <AccordionItem
                key="1"
                aria-label="San Martin"
                title="San Martin"
              ></AccordionItem>

              <AccordionItem
                key="1"
                aria-label="Junin"
                title="Junin"
              ></AccordionItem>
              <AccordionItem
                key="1"
                aria-label="Villa la Angostura"
                title="Villa la Angostura"
              ></AccordionItem>
              <AccordionItem
                key="1"
                aria-label="Neuquen"
                title="Neuquen"
              ></AccordionItem>
            </Accordion>
            <Button
              className="self-center lg:self-end font-semibold texl-lg lg:text-2xl mt-4 lg:mr-6 lg:mt-3 text-black bg-white/50"
              isBlock
              onPress={onOpenLink}
            >
              ¿Como envalo mi paquete?
            </Button>
            <LinkModal isOpen={isOpenLink} onOpenChange={onOpenChangeLink} />
          </div>
        </section>
        <Footer />
      </div>
    </NextUIProvider>
  );
}
