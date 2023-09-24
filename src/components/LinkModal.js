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
      size="2xl"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className=" font-bold text-xl lg:text-3xl px-6 lg:px-12 pt-6 pb-0">
              Como despachar tu envío
            </ModalHeader>
            <ModalBody className="px-6 py-2 pb-6 lg:px-12 lg:py-6 lg:pb-12 gap-2">
              <p className="font-semibold text-lg lg:text-2xl">
                Asegurate de que tu envío esté{" "}
                <span className="text-orange-500">protegido</span> y cuente con
                un <span className="text-orange-500">rótulo </span>
                donde estén los datos del remitente y destinatario (Nombre,
                Apellido, DNI, Teléfono, Ciudad y Domicilio)
              </p>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
