const validate = (values, fieldsToValidate) => {
  const errors = {};

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
    errors.email = "* Formato de email incorrecto";
  }

  if (
    fieldsToValidate.includes("user_email") &&
    (!values.user_email || !/\S+@\S+\.\S+/.test(values.user_email))
  ) {
    errors.user_email = "* Formato de email incorrecto";
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
    errors.password = "El Password debe ser mayor a 8 caracteres";
  }

  if (
    fieldsToValidate.includes("repeat_password") &&
    values.password !== values.repeat_password
  ) {
    errors.repeat_password = "Las contraseñas no coinciden";
  }

  return errors;
};

export default validate;
