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
            <ModalHeader className="font-bold text-2xl px-12 pt-6 pb-0">
              Como envalar bien tu paquete
            </ModalHeader>
            <ModalBody className="px-12 py-6 pb-12">
              <p className="font-semibold text-xl">
                Para prevenir cualquier incidente, te recomendamos que
                <span className="text-orange-500"> envuelvas </span>
                el contenido del paquete en papel y plastico de burbujas.
                Nosotros cuidamos al 100% los paquetes, pero siempre preferimos
                prevenir imprevistos.
              </p>
              <p className="font-semibold text-xl">
                Tambien te recomendamos{" "}
                <span className="text-orange-500">ponerlo en una caja</span> y
                cerrar la misma con cinta.
              </p>
              <p className="font-semibold text-xl">
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
