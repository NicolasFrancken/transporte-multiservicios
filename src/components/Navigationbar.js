import Image from "next/image";
import {
  Navbar,
  NavbarBrand,
  NavbarItem,
  Link,
  Button,
} from "@nextui-org/react";
import { usePathname, useRouter } from "next/navigation";

export default function Navigationbar() {
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
      className="fixed h-20 px-14"
    >
      <NavbarBrand className="scroll-smooth" as={Link} href={where}>
        <Image src={"/logo-nobg.png"} alt="logo" width={130} height={70} />
        {/* <p className="font-bold pl-2 text-xs">
          TRANSPORTE <br />
          MULTISERVICIOS
        </p> */}
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
