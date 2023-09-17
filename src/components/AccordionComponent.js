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
          y dejar tu paquete o escribirnos a nuestro WhatsApp!
        </p>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="San Martin"
        title="San Martin"
        className="font-semibold"
      >
        <p>
          En <span className="text-orange-500">San Martin </span>
          contamos con una sucursal en la calle
          <span className="text-orange-500"> General Roca 542</span>. Podes
          acercarte y dejar tu paquete o escribirnos a nuestro WhatsApp!
        </p>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Junin"
        title="Junin"
        className="font-semibold"
      >
        <p>
          En <span className="text-orange-500">Junin </span>
          no contamos con una sucursal. Podes acercarte a San Martin y dejar tu
          paquete o escribirnos a nuestro WhatsApp y lo pasamos a buscar!
        </p>
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Villa la Angostura"
        title="Villa la Angostura"
        className="font-semibold"
      >
        <p>
          En
          <span className="text-orange-500"> Villa La Angostura </span>
          no contamos con sucursal. Escribirnos a nuestro WhatsApp y lo pasamos
          a buscar!
        </p>
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Neuquen"
        title="Neuquen"
        className="font-semibold"
      >
        <p>
          En <span className="text-orange-500">Nuequen </span>
          no contamos con una sucursal. Escribirnos a nuestro WhatsApp y lo
          pasamos a buscar!
        </p>
      </AccordionItem>
    </Accordion>
  );
}
