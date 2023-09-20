import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionComponent() {
  return (
    <Accordion variant="shadow" className="lg:hidden" isCompact={false}>
      <AccordionItem
        key="1"
        aria-label="Bariloche"
        title="Bariloche"
        className="font-semibold"
      >
        <p>
          En <span className="text-orange-500">Bariloche </span>
          contamos con una sucursal en la calle
          <span className="text-orange-500"> Mitre 1360</span>. Podes acercarte
          y dejar tu paquete o escribirnos a nuestro WhatsApp y lo pasamos a
          buscar!
        </p>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="San Martín"
        title="San Martín"
        className="font-semibold"
      >
        <p>
          En <span className="text-orange-500">San Martín </span>
          contamos con una sucursal en la calle
          <span className="text-orange-500"> General Roca 542</span>. Podes
          acercarte y dejar tu paquete o escribirnos a nuestro WhatsApp y lo
          pasamos a buscar!
        </p>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Junín"
        title="Junín"
        className="font-semibold"
      >
        <p>
          Para hacer un envío desde
          <span className="text-orange-500"> Junín </span>
          podes acercarte a San Martín y dejar tu paquete o escribirnos a
          nuestro WhatsApp y lo pasamos a buscar!
        </p>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Villa la Angostura"
        title="Villa la Angostura"
        className="font-semibold"
      >
        <p>
          Para hacer un envío desde
          <span className="text-orange-500"> Villa La Angostura </span>
          podes escribirnos a nuestro WhatsApp así lo pasamos a buscar!
        </p>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Neuquén"
        title="Neuquén"
        className="font-semibold"
      >
        <p>
          Para hacer un envío desde
          <span className="text-orange-500"> Nuequén </span>
          podes escribirnos a nuestro WhatsApp así lo pasamos a buscar!
        </p>
      </AccordionItem>
    </Accordion>
  );
}
