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
} from "@nextui-org/react";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function Navigationbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  let where;
  if (pathname === "/") {
    where = "#main";
  } else {
    where = "/";
  }

  return (
    <Navbar
      isBordered={true}
      isBlurred={true}
      maxWidth="full"
      onMenuOpenChange={setIsMenuOpen}
      className="fixed h-20 p-0 lg:px-20 "
    >
      <NavbarBrand className="scroll-smooth" as={Link} href={where}>
        <Image src={"/logo-nobg.png"} alt="logo" width={130} height={70} />
      </NavbarBrand>
      <NavbarItem>
        <Link
          isBlock
          href="/quienes-somos"
          color="foreground"
          className="font-bold text-lg hidden md:flex"
        >
          Sobre Nosotros
        </Link>
      </NavbarItem>
      <NavbarItem>
        <Button
          size="lg"
          className="font-bold bg-orange-400 hidden md:flex"
          as={Link}
          href="#envios"
        >
          ENVIOS
        </Button>
      </NavbarItem>
      <NavbarMenuToggle
        aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        className="md:hidden"
      />
      <NavbarMenu className="flex flex-col items-center justify-center">
        <NavbarMenuItem>
          <Button
            size="lg"
            className="font-bold bg-orange-400"
            as={Link}
            href="#envios"
          >
            ENVIOS
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            isBlock
            href="/quienes-somos"
            color="foreground"
            className="font-bold text-lg"
          >
            Sobre Nosotros
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
