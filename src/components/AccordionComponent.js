import { Accordion, AccordionItem } from "@nextui-org/react";

export default function AccordionComponent() {
  const itemClasses = {
    title: "md:text-2xl",
  };

  return (
    <Accordion variant="shadow" isCompact={false} itemClasses={itemClasses}>
      <AccordionItem
        key="1"
        aria-label="Bariloche"
        title="Bariloche"
        className="font-semibold md:text-2xl"
      >
        En <span className="text-orange-500">Bariloche </span>
        contamos con una sucursal en la calle
        <span className="text-orange-500"> Mitre 1360.</span> Podes acercarte y
        despachar o escribirnos a nuestro WhatsApp y coordinamos!
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="San Martín de los Andes"
        title="San Martín de los Andes"
        className="font-semibold md:text-2xl "
      >
        En <span className="text-orange-500">San Martín de los Andes </span>
        contamos con una sucursal en la calle
        <span className="text-orange-500"> General Roca 542.</span> Podes
        acercarte y despachar o escribirnos a nuestro WhatsApp y coordinamos!
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Junín de los Andes"
        title="Junín de los Andes"
        className="font-semibold md:text-2xl"
      >
        Para hacer un envío desde
        <span className="text-orange-500"> Junín de los Andes </span>
        podes acercarte a San Martín y despachar o escribirnos a nuestro
        WhatsApp y coordinamos!
      </AccordionItem>
      <AccordionItem
        key="4"
        aria-label="Villa la Angostura"
        title="Villa la Angostura"
        className="font-semibold md:text-2xl"
      >
        Para hacer un envío desde
        <span className="text-orange-500"> Villa la Angostura </span>
        podes escribirnos a nuestro WhatsApp y coordinamos!
      </AccordionItem>
      <AccordionItem
        key="5"
        aria-label="Neuquén, Cipolletti y el Valle"
        title="Neuquén, Cipolletti y el Valle"
        className="font-semibold md:text-2xl"
      >
        Para hacer un envío desde
        <span className="text-orange-500">
          {" "}
          Neuquén, Cipolletti o el Valle{" "}
        </span>
        podes escribirnos a nuestro WhatsApp y coordinamos!
      </AccordionItem>
    </Accordion>
  );
}
