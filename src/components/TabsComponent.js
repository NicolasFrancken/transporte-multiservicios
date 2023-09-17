import { Card, CardBody, Tabs, Tab } from "@nextui-org/react";

export default function TabsComponent() {
  return (
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
            acercarte y dejar tu paquete o escribirnos a nuestro WhatsApp!
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
            <span className="text-orange-500"> General Roca 542</span>. Podes
            acercarte y dejar tu paquete o escribirnos a nuestro WhatsApp!
          </CardBody>
        </Card>
      </Tab>
      <Tab key="junin" title="Junin" className="flex flex-col px-6 py-6">
        <Card className="m-0 hidden lg:flex">
          <CardBody className="font-semibold text-3xl inline text-center p-7">
            En <span className="text-orange-500">Junin </span>
            no contamos con una sucursal. Podes acercarte a San Martin y dejar
            tu paquete o escribirnos a nuestro WhatsApp y lo pasamos a buscar!
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
            no contamos con sucursal. Escribirnos a nuestro WhatsApp y lo
            pasamos a buscar!
          </CardBody>
        </Card>
      </Tab>
      <Tab key="neuquen" title="Neuquen" className="flex flex-col px-6 py-6">
        <Card className="m-0 hidden lg:flex">
          <CardBody className="font-semibold text-3xl inline text-center p-7">
            En <span className="text-orange-500">Nuequen </span>
            no contamos con una sucursal. Escribirnos a nuestro WhatsApp y lo
            pasamos a buscar!
          </CardBody>
        </Card>
      </Tab>
    </Tabs>
  );
}
