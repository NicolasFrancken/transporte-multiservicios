import {
  Card,
  CardBody,
  Button,
  Image,
  Modal,
  ModalContent,
  ModalHeader,
  ModalBody,
} from "@nextui-org/react";

export default function LinkModal({ isOpen, onOpenChange }) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="bg-white/70"
      backdrop="blur"
      size="4xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className=" font-bold text-xl lg:text-3xl px-3 lg:px-12 pt-6 pb-0">
              Como envalar bien tu paquete
            </ModalHeader>
            <ModalBody className="px-3 py-3 pb-6 lg:px-12 lg:py-6 lg:pb-12">
              <p className="font-semibold text-lg lg:text-2xl">
                Para prevenir cualquier incidente, te recomendamos que
                <span className="text-orange-500"> envuelvas </span>
                el contenido del paquete en papel y plastico de burbujas.
                Nosotros cuidamos al 100% los paquetes, pero siempre preferimos
                prevenir imprevistos.
              </p>
              <p className="font-semibold text-lg lg:text-2xl">
                Tambien te recomendamos
                <span className="text-orange-500"> ponerlo en una caja</span> y
                cerrar la misma con cinta.
              </p>
              <p className="font-semibold text-lg lg:text-2xl">
                Afuera del paquete escribí bien grande: Nombre, Dirección y
                Número de telefono
              </p>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
