import { z } from "zod";

/* -------------------------------------------------------------------------- */
/*                               LOGIN SCHEMA                                 */
/* -------------------------------------------------------------------------- */

export const loginSchema = z.object({
  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Email is required")
    .email("Invalid email address"),

  password: z
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password is too long"),
});

/* -------------------------------------------------------------------------- */
/*                             REGISTER SCHEMA                                */
/* -------------------------------------------------------------------------- */

export const registerSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, "Name must be at least 2 characters")
    .max(50, "Name is too long"),

  college: z
    .string()
    .trim()
    .min(1, "Please select your college"),

  email: z
    .string()
    .trim()
    .toLowerCase()
    .min(1, "Email is required")
    .email("Invalid email address"),

  password: z
    .string()
    .trim()
    .min(6, "Password must be at least 6 characters")
    .max(100, "Password is too long")
    .regex(
      /^(?=.*[A-Za-z])(?=.*\d).+$/,
      "Password must contain at least one letter and one number"
    ),
});

/* -------------------------------------------------------------------------- */
/*                                   TYPES                                    */
/* -------------------------------------------------------------------------- */

export type LoginInput = z.infer<typeof loginSchema>;

export type RegisterInput = z.infer<typeof registerSchema>;
