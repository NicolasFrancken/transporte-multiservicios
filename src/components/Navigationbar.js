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
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import UsModal from "./UsModal";

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
      <NavbarBrand className="scroll-smooth" as={Link} href={where2}>
        <Image src={"/logo-nobg.png"} alt="logo" width={130} height={70} />
      </NavbarBrand>
      <UsModal isOpen={isOpenUs} onOpenChange={onOpenChangeUs} />
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
            onClick={handleEnviosClick}
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
            onPress={handleUsClick}
          >
            Sobre Nosotros
          </Link>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  );
}
