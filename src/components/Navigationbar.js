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
} from "@nextui-org/react";
import { useState } from "react";
import UsModal from "./UsModal";

export default function Navigationbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const {
    isOpen: isOpenUs,
    onOpen: onOpenUs,
    onOpenChange: onOpenChangeUs,
  } = useDisclosure();

  const handleUsClick = () => {
    setIsMenuOpen(!isMenuOpen);
    onOpenUs();
  };
  const handleEnviosClick = () => {
    setIsMenuOpen(!isMenuOpen);
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
      <NavbarBrand as={Link} href={"#main"}>
        <Image src={"/logo-nobg.png"} alt="logo" width={130} height={70} />
      </NavbarBrand>
      <UsModal isOpen={isOpenUs} onOpenChange={onOpenChangeUs} />
      <NavbarItem>
        <Link
          isBlock
          color="foreground"
          className="font-bold text-lg hidden md:flex bg-transparent"
          as={Button}
          onPress={onOpenUs}
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
      <NavbarMenuToggle className="md:hidden" />
      <NavbarMenu className="flex flex-col items-center justify-center">
        <NavbarMenuItem>
          <Button
            size="lg"
            className="font-bold bg-orange-400"
            as={Link}
            href={"#envios"}
            onClick={handleEnviosClick}
          >
            ENVIOS
          </Button>
        </NavbarMenuItem>
        <NavbarMenuItem>
          <Link
            isBlock
            color="foreground"
            className="font-bold text-lg bg-transparent"
            as={Button}
            onPress={handleUsClick}
          >
            Sobre Nosotros
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
