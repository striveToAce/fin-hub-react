import * as Yup from "yup";
export const loginSchema = () =>
  Yup.object({
    username: Yup.string()
      .min(8, "Username must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[^A-Z]{8,}$/,
        "Username must contain lowercase letters, a number, and a special character."
      ),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[^A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain uppercase and lowercase letters, a number, and a special character."
      ),
  });

export const signupSchema = () =>
  Yup.object({
    fullName: Yup.string().required("Full name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    username: Yup.string()
      .min(8, "Username must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[^A-Z]{8,}$/,
        "Username must contain lowercase letters, a number, and a special character."
      ),
    password: Yup.string()
      .min(8, "Password must be at least 8 characters long")
      .matches(
        /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[^A-Za-z\d@$!%*?&]{8,}$/,
        "Password must contain uppercase and lowercase letters, a number, and a special character."
      ),
  });
