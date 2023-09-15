import { Link } from "@nextui-org/react";
import { FaFacebookSquare, FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="flex flex-col items-center justify-center px-20 py-5 bg-white/50 text-black">
      <div className="flex mb-5">
        <Link
          href="https://www.instagram.com/transporte_multiservicios/"
          color="foreground"
          isExternal={true}
          className="pr-2"
        >
          <FaInstagram className="text-black h-10 w-10" />
        </Link>
        <Link
          href="https://www.facebook.com/transportemulti"
          color="foreground"
          isExternal={true}
          className="pl-2"
        >
          <FaFacebookSquare className="text-black h-10 w-10" />
        </Link>
      </div>
      <p className="text-center font-semibold">
        ©2023 TRANSPORTE MULTISERVICIOS <br />
        Todos los derechos reservados
      </p>
    </footer>
  );
}
