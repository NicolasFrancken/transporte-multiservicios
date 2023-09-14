import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  Link,
  Button,
  Card,
  CardBody,
} from "@nextui-org/react";

export default function Navigationbar() {
  return (
    <Navbar
      isBordered={true}
      isBlurred={true}
      maxWidth="2xl"
      className="fixed h-20"
    >
      <NavbarBrand>
        <Image src={"/mini-logo.jpeg"} alt="logo" width={40} height={40} />
        <p className="font-bold pl-2">TRANSPORTE</p>
      </NavbarBrand>
      <NavbarItem>
        <Link
          isBlock
          href="/quienes-somos"
          color="foreground"
          className="font-bold"
        >
          Sobre Nosotros
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Button
          size="lg"
          className="font-bold bg-orange-400"
          as={Link}
          href="#envios"
        >
          ENVIOS
        </Button>
      </NavbarItem>
    </Navbar>
  );
}
