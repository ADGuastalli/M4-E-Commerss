import { IErrors, IFormValues } from "@/interfece/Interface";

const validate = (values: IFormValues, fieldsToValidate: string[]): IErrors => {
  const errors: IErrors = {};

  if (fieldsToValidate.includes("name") && !values.name) {
    errors.name = "*";
  }

  if (fieldsToValidate.includes("user_name") && !values.user_name) {
    errors.user_name = "*";
  }

  if (
    fieldsToValidate.includes("email") &&
    (!values.email || !/\S+@\S+\.\S+/.test(values.email))
  ) {
    errors.email = "* Incorrect email format. Example: 4oLZ9@example.com";
  }

  if (
    fieldsToValidate.includes("user_email") &&
    (!values.user_email || !/\S+@\S+\.\S+/.test(values.user_email))
  ) {
    errors.user_email = "* Incorrect email format. Example: 4oLZ9@example.com";
  }

  if (fieldsToValidate.includes("address") && !values.address) {
    errors.address = "*";
  }

  if (fieldsToValidate.includes("message") && !values.message) {
    errors.message = "*";
  }

  if (fieldsToValidate.includes("phone") && !values.phone) {
    errors.phone = "*";
  }

  if (fieldsToValidate.includes("password") && !values.password) {
    errors.password = "*";
  } else if (values.password && values.password.length < 8) {
    errors.password = "The password must be longer than 8 characters.";
  }

  if (
    fieldsToValidate.includes("repeat_password") &&
    values.password !== values.repeat_password
  ) {
    errors.repeat_password = "The passwords do not match.";
  }

  return errors;
};

export default validate;
