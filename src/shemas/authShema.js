import * as yup from "yup";

export const loginSchema = yup.object({
  login: yup
    .string()
    .trim()
    .required("Login is required")
    .matches(
      /^[a-zA-Z0-9\-_.@]+$/,
      "Login must contain only Latin characters and special symbols (-, _, ., @)"
    )
    .min(5, "Login must be at least 5 characters long")
    .max(100, "Login must be at max 100 characters long"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(100, "Password must be at max 100 characters long")
    .matches(
      /^[a-zA-Z\d@$!%*?&]+$/,
      "Password must contain only Latin characters, digits, and special symbols (@, $, !, %, *, ?, &)"
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
});

export const singUpSchema = yup.object({
  login: yup
    .string()
    .trim()
    .required("Login is required")
    .matches(
      /^[a-zA-Z0-9\-_.@]+$/,
      "Login must contain only Latin characters and special symbols (-, _, ., @)"
    )
    .min(5, "Login must be at least 5 characters long")
    .max(100, "Login must be at max 100 characters long"),
  password: yup
    .string()
    .trim()
    .required("Password is required")
    .min(6, "Password must be at least 6 characters long")
    .max(100, "Password must be at max 100 characters long")
    .matches(
      /^[a-zA-Z\d@$!%*?&]+$/,
      "Password must contain only Latin characters, digits, and special symbols (@, $, !, %, *, ?, &)"
    )
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/,
      "Password must contain at least one uppercase letter, one lowercase letter, one number, and one special character"
    ),
  email: yup
    .string()
    .trim()
    .required("Email is required")
    .matches(
      /^[a-zA-Z\d._@-]+$/,
      "Email must contain only Latin characters, digits,and special symbols (-, _, @, .)"
    )
    .email("Invalid email format")
    .min(5, "Email must be at least 5 characters long")
    .max(100, "Email must be at max 100 characters long"),
});
