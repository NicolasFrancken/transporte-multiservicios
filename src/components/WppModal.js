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
            <ModalBody className="pt-0 pb-3">
              <ul className="flex flex-col">
                <Card className="flex mb-3">
                  <CardBody className="flex flex-row justify-between py-2 pl-8">
                    <h3 className="w-fit font-semibold text-xl">Bariloche</h3>
                    <Button
                      className="w-fit h-fit bg-transparent p-0 m-0"
                      radius="full"
                    >
                      <Image
                        src={"/WhatsApp.webp"}
                        alt="WhatsApp"
                        width={30}
                        height={30}
                      />
                    </Button>
                  </CardBody>
                </Card>
                <Card className="flex mb-3">
                  <CardBody className="flex flex-row justify-between py-2 pl-8">
                    <h3 className="w-fit font-semibold text-xl">San Martin</h3>
                    <Button
                      className="w-fit h-fit bg-transparent p-0 m-0"
                      radius="full"
                    >
                      <Image
                        src={"/WhatsApp.webp"}
                        alt="WhatsApp"
                        width={30}
                        height={30}
                      />
                    </Button>
                  </CardBody>
                </Card>
                <Card className="flex mb-3">
                  <CardBody className="flex flex-row justify-between py-2 pl-8">
                    <h3 className="w-fit font-semibold text-xl">Junin</h3>
                    <Button
                      className="w-fit h-fit bg-transparent p-0 m-0"
                      radius="full"
                    >
                      <Image
                        src={"/WhatsApp.webp"}
                        alt="WhatsApp"
                        width={30}
                        height={30}
                      />
                    </Button>
                  </CardBody>
                </Card>
                <Card className="flex mb-3">
                  <CardBody className="flex flex-row justify-between py-2 pl-8">
                    <h3 className="w-fit font-semibold text-xl">
                      Villa la Angostura
                    </h3>
                    <Button
                      className="w-fit h-fit bg-transparent p-0 m-0"
                      radius="full"
                    >
                      <Image
                        src={"/WhatsApp.webp"}
                        alt="WhatsApp"
                        width={30}
                        height={30}
                      />
                    </Button>
                  </CardBody>
                </Card>
                <Card className="flex mb-3">
                  <CardBody className="flex flex-row justify-between py-2 pl-8">
                    <h3 className="w-fit font-semibold text-xl">Neuquen</h3>
                    <Button
                      className="w-fit h-fit bg-transparent p-0 m-0"
                      radius="full"
                    >
                      <Image
                        src={"/WhatsApp.webp"}
                        alt="WhatsApp"
                        width={30}
                        height={30}
                      />
                    </Button>
                  </CardBody>
                </Card>
              </ul>
            </ModalBody>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
