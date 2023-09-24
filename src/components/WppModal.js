import {
  Button,
  Link,
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
              ¿De dónde sos?
            </ModalHeader>
            <ModalBody className="pt-0 pb-6">
              <ul className="flex flex-col gap-2">
                <Button
                  as={Link}
                  className="flex justify-between font-semibold text-xl py-2 pl-8 bg-white h-fit"
                  href="https://wa.me/+542944554970?text=Quiero%20hacer%20un%20envío%20desde%20Bariloche!%20¿Cómo%20hago?"
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
                  as={Link}
                  className="flex justify-between font-semibold text-xl py-2 pl-8 bg-white h-fit"
                  href="https://wa.me/+542944249796?text=Quiero%20hacer%20un%20envío%20desde%20San%20Martín%20¿Cómo%20hago?"
                >
                  San Martín de los Andes
                  <Image
                    src={"/WhatsApp.webp"}
                    alt="WhatsApp"
                    width={30}
                    height={30}
                  />
                </Button>
                <Button
                  as={Link}
                  className="flex justify-between font-semibold text-xl py-2 pl-8 bg-white h-fit"
                  href="https://wa.me/+542944249796?text=Quiero%20hacer%20un%20envío%20desde%20Junín%20¿Cómo%20hago?"
                >
                  Junín de los Andes
                  <Image
                    src={"/WhatsApp.webp"}
                    alt="WhatsApp"
                    width={30}
                    height={30}
                  />
                </Button>
                <Button
                  as={Link}
                  className="flex justify-between font-semibold text-xl py-2 pl-8 bg-white h-fit"
                  href="https://wa.me/+542944249796?text=Quiero%20hacer%20un%20envío%20desde%20Villa%20la%20Angostura!%20¿Cómo%20hago?"
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
                  as={Link}
                  className="flex justify-between font-semibold text-xl py-2 pl-8 bg-white h-fit"
                  href="https://wa.me/+542996088211?text=Quiero%20hacer%20un%20envío%20desde%20Neuquén!%20¿Cómo%20hago?"
                >
                  Neuquén, Cipolletti y el Valle
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
