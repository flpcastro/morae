"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(1, "Nome é obrigatório"),
  email: z.string().min(1, "Email é obrigatório").email("Insira um email válido"),
  message: z.string().min(1, "A mensagem é obrigatória").max(200, "A mensagem deve ter no máximo 200 caracteres"),
})

type FormData = z.infer<typeof schema>;

export function useContactController() {
  const {
    handleSubmit: hookFormHandleSubmit,
    register,
    formState: { errors, isSubmitting }
  } = useForm<FormData>({
    resolver: zodResolver(schema)
  });

  const handleSubmit = hookFormHandleSubmit(async (data) => {
    try {
      console.log(data);
    } catch (error) {
      toast.error('Ocorreu um erro ao enviar o formulário')
    }
  })

  return {
    handleSubmit,
    register,
    errors,
    isSubmitting
  }
}