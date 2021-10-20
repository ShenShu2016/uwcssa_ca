export const validator = (values, fieldName) => {
  let errors = {};
  switch (fieldName) {
    case "fullName":
      validateFullName(values.fullName, errors);
      break;
    case "email":
      validateEmail(values.email, errors);
      break;
    case "guest":
      validateGuest(values.guest, errors);
      break;
    default:
  }
  return errors;
};

function validateFullName(fullName, errors) {
  let result = true;
  if (!fullName) {
    errors.fullName = "姓名是必填项";
    result = false;
  }

  return result;
}

function validateEmail(email, errors) {
  let result = true;
  if (!email) {
    errors.email = "邮箱是必填项";
    result = false;
  } else {
    const re =
      /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    result = re.test(String(email).toLowerCase());
    if (!result) errors.email = "无效的邮箱地址";
  }
  return result;
}

function validateGuest(guest, errors) {
  let result = true;
  if (!guest) {
    errors.guest = "携带人数是必填项";
    result = false;
  } else {
    const re = /^[0-9\b]+$/;
    result = re.test(guest);
    if (!result) errors.guest = "无效的携带人数";
  }

  return result;
}
