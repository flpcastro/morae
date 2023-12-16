"use client";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";
import { Spinner } from "@/components/Spinner";
import { Textarea } from "@/components/Textarea";
import { useContactController } from "@/hooks/useContactController";

export default function Contact() {
  const { 
    handleSubmit, 
    register, 
    errors, 
    isSubmitting 
  } = useContactController();

  const isDisabled = 
    errors.email?.message?.length! > 0 || 
    errors.name?.message?.length! > 0 || 
    errors.message?.message?.length! > 0;

  return (
    <section className="px-80 py-8 bg-dark300 flex flex-col items-center justify-center gap-6">
      <h1 className="font-semibold text-2xl">
        Formulário de Contato
      </h1>

      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-2"
      >
        <Input 
          placeholder="Nome"
          error={errors.name?.message}
          {...register('name')}
        />

        <Input 
          placeholder="E-mail"
          type="email"
          error={errors.email?.message}
          {...register('email')}
        />

        <Textarea 
          placeholder="Digite sua mensagem aqui"
          error={errors.message?.message}
          {...register('message')}
        />

        <Button 
          type="submit"
          isLoading={isSubmitting}
          disabled={isDisabled}
          className="mt-2"
        >
          {isSubmitting ? <Spinner /> : 'Enviar'}
        </Button>
      </form>
    </section>
  )
}