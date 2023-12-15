import { Button } from "./Button";

export function Budget() {
  return (
    <section className="px-80 py-20 flex flex-col items-center">
      <h1 className="font-semibold text-dark100 text-[32px]">
        Orçamento
      </h1>

      <p className="font-medium text-dark200 text-lg mt-4">
        Interessado em entrar em contato com um de nossos profissionais?
      </p>

      <Button
        className="bg-transparent border border-dark100 text-dark100 mt-9"
      >
        Entre em contato
      </Button>
    </section>
  )
}