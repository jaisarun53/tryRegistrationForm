import * as Yup from "yup";

export const registerValidationSchema = Yup.object({
  firstName: Yup.string()
    .trim()
    .max(30, "First name must be at max 30 characters.")
    .required("First name is required."),
  lastName: Yup.string()
    .required("Last name is required.")
    .trim()
    .max(30, "Last name must be at max 30 characters."),
  email: Yup.string()
    .email("Must be a valid email.")
    .required("Email is required.")
    .trim()
    .max(65, "Email must be at max 65 characters."),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters.")
    .max(20, "Password must be at max 20 characters.")
    .required("Password is required."),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password"), null],
    "Password must match"
  ),
  gender: Yup.string()
    .trim()
    .required("Gender is required")
    .oneOf(
      ["male", "female", "preferNotToSay"],
      "Gender must be either male or female or preferNotToSay."
    ),
  location: Yup.string()
    .trim()
    .required("Location must be required.")
    .min(3, "Location must be atleast of three characters.")
    .max(55, "Location must be at max 55 characters"),
});
