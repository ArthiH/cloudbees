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
  choice: yup.array().required("Please select at least one checkbox"),
  feature: yup.array().required("Please select at least one feature"),
  language: yup.array().required("Please select at least one language"),
  backendlist: yup.array(),
  payment: yup.string(),
});
