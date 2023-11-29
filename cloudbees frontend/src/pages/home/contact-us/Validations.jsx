import * as yup from "yup";

export const ContactSchema = yup.object().shape({
  firstname: yup.string().required("Firstname is mandatory"),
  lastname: yup.string(),
  email: yup.string().email().required("Please enter valid email"),
  phone: yup.string(),
  message: yup.string(),
});

export const RequestSchema = yup.object().shape({
  customername: yup.string().required("Customername is mandatory"),
  email: yup.string().email().required("Email ID is mandatory"),
  phone: yup.string().required("Phonenumber is mandatory"),
  backend: yup.string().required("Backend Item is mandatory"),
  choice: yup.array().min(1).required("Please select at least one checkbox"),
  feature: yup.array().min(1).required("Please select at least one feature"),
  language: yup.array().min(1).required("Please select at least one language"),
  backendlist: yup.array(),
  payment: yup.string(),
});

export const ApplicationSchema = yup.object().shape({
  firstname: yup.string().required("Firstname is mandatory"),
  lastname: yup.string().required("Lastname is mandatory"),
  email: yup.string().email().required("Please enter valid email"),
  phone: yup
    .string()
    .matches(/^[0-9]{10}$/, "Phone number must be 10 digits")
    .required("Phonenumber is mandatory"),
  resume: yup
    .mixed()
    .test("fileType", "Only PDF files are allowed", (value) => {
      if (!value) return true;
      return value[0]?.type === "application/pdf";
    })
    .required("Resume is required"),
});
