import { z } from "zod";

export const registerSchema = z.object({
  name: z
    .string({
      required_error: "El nombre es requerido",
      invalid_type_error: "El nombre debe ser un texto",
    })
    .min(6, {
      message: "El nombre debe tener al menos 6 caracteres",
    })
    .max(100, {
      message: "El nombre debe tener máximo 100 caracteres",
    }),
  email: z
    .string({
      required_error: "El email es requerido",
      invalid_type_error: "El email debe ser un texto",
    })
    .email({
      message: "El email no es valido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
      invalid_type_error: "La contraseña debe ser un texto",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    })
    .max(70, {
      message: "La contraseña debe tener máximo 70 caracteres",
    }),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "El email es requerido",
      invalid_type_error: "El email debe ser un texto",
    })
    .email({
      message: "El email no es valido",
    }),
  password: z
    .string({
      required_error: "La contraseña es requerida",
      invalid_type_error: "La contraseña debe ser un texto",
    })
    .min(6, {
      message: "La contraseña debe tener al menos 6 caracteres",
    })
    .max(70, {
      message: "La contraseña debe tener máximo 70 caracteres",
    }),
});
