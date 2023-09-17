import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  NavbarMenuToggle,
  NavbarMenuItem,
  Link,
  Button,
  NavbarMenu,
  useDisclosure,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
  Card,
  CardHeader,
  CardBody,
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function Navigationbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [where1, setWhere1] = useState("");
  const [where2, setWhere2] = useState("");

  const pathname = usePathname();

  const {
    isOpen: isOpenUs,
    onOpen: onOpenUs,
    onOpenChange: onOpenChangeUs,
  } = useDisclosure();

  useEffect(() => {
    if (pathname === "/") {
      setWhere1("#envios");
      setWhere2("#main");
    } else {
      setWhere1("/#envios");
      setWhere2("/");
    }
  }, []);

  const handleClick = () => {
    setIsMenuOpen(!isMenuOpen);
    onOpenUs();
  };

  return (
    <Navbar
      isBordered={true}
      isBlurred={true}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      className="fixed h-20 p-0 lg:px-20 "
      isMenuOpen={isMenuOpen}
    >
      <NavbarBrand className="scroll-smooth" as={Link} href={where2}>
        <Image src={"/logo-nobg.png"} alt="logo" width={130} height={70} />
      </NavbarBrand>
      <NavbarItem>
        <Link
          isBlock
          href="/quienes-somos"
          color="foreground"
          className="font-bold text-lg hidden md:flex bg-transparent"
          as={Button}
          onPress={onOpenUs}
        >
          Sobre Nosotros
        </Link>
        <Modal isOpen={isOpenUs} onOpenChange={onOpenChangeUs} size="full">
          <ModalContent>
            {(onClose) => (
              <>
                <section className="min-h-screen px-8  py-[7rem] lg:px-28 lg:pt-40 flex flex-col justify-center background4">
                  <ModalBody className="p-0">
                    <Card className="bg-white/50">
                      <CardHeader className="font-bold text-xl md:text-2xl pb-0 pt-6 px-6 md:pt-12 md:px-12 ">
                        ¿Quenes somos?
                      </CardHeader>
                      <CardBody className="font-semibold text-sm md:text-xl py-6 px-6 md:pt-6 md:pb-12 md:px-12">
                        <p>
                          Somos una empresa familiar que comenzó en el 2002, con
                          una sola camioneta. De a poco fuimos generando
                          confianza en los clientes de Bariloche, y estos nos
                          trajeron mas clientes.
                        </p>
                        <p>
                          Luego pudimos adquiir otra camioneta para viajar hacia
                          San martin y Junin.
                        </p>
                        <p>
                          Al cabo de 10 años ya teniamos 3 camionetas y 1
                          camion. Nuestro trabajo y dedicacion hizo que el 70%
                          de las empresas locales confien en nuestros servicios
                          para el transporte de su mercaderia, asi como clientes
                          unipersonales para el transporte de pequeños paquetes.
                        </p>
                        <p>
                          Ha sido un largo camino de aprendizaje. Hoy en dia nos
                          consideramos los mejores en lo que hacemos, con mas de
                          5 camionetas y 1 camion que viajan constantemente por
                          toda la zona.
                        </p>
                        <p>
                          Agradecemos a todos nuestros clientes por confiar
                          diariamente en nosotros!
                        </p>
                      </CardBody>
                    </Card>
                  </ModalBody>
                </section>
              </>
            )}
          </ModalContent>
        </Modal>
      </NavbarItem>
      <NavbarItem>
        <Button
          size="lg"
          className="font-bold bg-orange-400 hidden md:flex"
          as={Link}
          href={where1}
        >
          ENVIOS
        </Button>
      </NavbarItem>
      <NavbarMenuToggle className="md:hidden" />
      <NavbarMenu className="flex flex-col items-center justify-center">
        <NavbarMenuItem>
          <Button
            size="lg"
            className="font-bold bg-orange-400"
            as={Link}
            href={where1}
            onClick={handleClick}
          >
            ENVIOS
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            isBlock
            href="/quienes-somos"
            color="foreground"
            className="font-bold text-lg bg-transparent"
            as={Button}
            onPress={handleClick}
          >
            Sobre Nosotros
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
