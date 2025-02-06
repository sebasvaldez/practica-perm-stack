import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "El título es requerido",
      invalid_type_error: "El título debe ser un texto",
    })
    .min(5, {
      message: "El título debe tener al menos 5 caracteres",
    })
    .max(100, {
      message: "El título debe tener máximo 100 caracteres",
    }),
  description: z
    .string({
      required_error: "La descripción es requerida",
      invalid_type_error: "La descripción debe ser un texto",
    })
    .min(5, {
      message: "La descripción debe tener al menos 5 caracteres",
    })
    .max(255, {
      message: "La descripción debe tener máximo 255 caracteres",
    }),
});

export const updateTaskSchema = z.object({
  title: z
    .string({
      required_error: "El título es requerido",
      invalid_type_error: "El título debe ser un texto",
    })
    .min(5, {
      message: "El título debe tener al menos 5 caracteres",
    })
    .max(100, {
      message: "El título debe tener máximo 100 caracteres",
    })
    .optional(),
  description: z
    .string({
      required_error: "La descripción es requerida",
      invalid_type_error: "La descripción debe ser un texto",
    })
    .min(5, {
      message: "La descripción debe tener al menos 5 caracteres",
    })
    .max(255, {
      message: "La descripción debe tener máximo 255 caracteres",
    })
    .optional(),
});
