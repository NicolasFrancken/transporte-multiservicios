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

export default function WppModal({ isOpen, onOpenChange }) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      className="bg-white/70"
      backdrop="blur"
    >
      <ModalContent>
        {(onClose) => (
          <>
            <ModalHeader className="font-bold text-2xl py-6">
              ¿De donde sos?
            </ModalHeader>
            <ModalBody className="pt-0 pb-6">
              <ul className="flex flex-col gap-2">
                <Button
                  className="flex justify-between font-semibold text-xl py-2 pl-8 bg-white h-fit"
                  radius=""
                >
                  Bariloche
                  <Image
                    src={"/WhatsApp.webp"}
                    alt="WhatsApp"
                    width={30}
                    height={30}
                  />
                </Button>
                <Button
                  className="flex justify-between font-semibold text-xl py-2 pl-8 bg-white h-fit"
                  radius=""
                >
                  San Martín
                  <Image
                    src={"/WhatsApp.webp"}
                    alt="WhatsApp"
                    width={30}
                    height={30}
                  />
                </Button>
                <Button
                  className="flex justify-between font-semibold text-xl py-2 pl-8 bg-white h-fit"
                  radius=""
                >
                  Junin
                  <Image
                    src={"/WhatsApp.webp"}
                    alt="WhatsApp"
                    width={30}
                    height={30}
                  />
                </Button>
                <Button
                  className="flex justify-between font-semibold text-xl py-2 pl-8 bg-white h-fit"
                  radius=""
                >
                  Villa la Angostura
                  <Image
                    src={"/WhatsApp.webp"}
                    alt="WhatsApp"
                    width={30}
                    height={30}
                  />
                </Button>
                <Button
                  className="flex justify-between font-semibold text-xl py-2 pl-8 bg-white h-fit"
                  radius=""
                >
                  Neuquen
                  <Image
                    src={"/WhatsApp.webp"}
                    alt="WhatsApp"
                    width={30}
                    height={30}
                  />
                </Button>
              </ul>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
