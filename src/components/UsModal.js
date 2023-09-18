import {
  Modal,
  ModalContent,
  ModalBody,
  Card,
  CardHeader,
  CardBody,
  Button,
} from "@nextui-org/react";
import { RxCross1 } from "react-icons/rx";

export default function UsModal({ isOpen, onOpenChange }) {
  return (
    <Modal
      isOpen={isOpen}
      onOpenChange={onOpenChange}
      size="full"
      hideCloseButton
    >
      <ModalContent>
        {(onClose) => (
          <>
            <section className="min-h-screen px-8  py-[7rem] lg:px-28 lg:pt-40 flex flex-col justify-center background4">
              <ModalBody className="p-0">
                <Card className="bg-white/50">
                  <Button
                    onPress={onOpenChange}
                    className="absolute top-0 right-0 bg-transparent text-lg font-semibold z-50 w-fit h-fit min-w-fit max-w-fit max-h-fit min-h-fit px-0 m-4"
                    radius="full"
                  >
                    <RxCross1 className="w-5 h-5" />
                  </Button>
                  <CardHeader className="font-bold text-xl md:text-2xl pb-0 pt-6 px-6 md:pt-12 md:px-12 flex justify-between">
                    ¿Quenes somos?
                  </CardHeader>
                  <CardBody className="font-semibold text-sm md:text-xl py-6 px-6 md:pt-6 md:pb-12 md:px-12">
                    <p>
                      Somos una empresa familiar que comenzó en el 2002 con una
                      sola camioneta. De a poco fuimos generando confianza en
                      los clientes de Bariloche, y estos nos trajeron más
                      clientes.
                    </p>
                    <p>
                      Luego pudimos adquirir otra camioneta para viajar hacia
                      San Martín y Junín.
                    </p>
                    <p>
                      Al cabo de 10 años ya teníamos 3 camionetas y 1 camión.
                      Nuestro trabajo y dedicación hizo que el 70% de las
                      empresas locales confíen en nuestros servicios para el
                      transporte de su mercadería, así como clientes
                      unipersonales para el transporte de pequeños paquetes.
                    </p>
                    <p>
                      Ha sido un largo camino de aprendizaje. Hoy en dia nos
                      consideramos los mejores en lo que hacemos, con más de 5
                      camionetas y 1 camión que viajan constantemente por toda
                      la zona.
                    </p>
                    <p>
                      Agradecemos a todos nuestros clientes por confiar
                      diariamente en nosotros!
                    </p>
                  </CardBody>
                </Card>
              </ModalBody>
            </section>
          </>
        )}
      </ModalContent>
    </Modal>
  );
}
