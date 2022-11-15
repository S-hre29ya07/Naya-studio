export const emailValidation = (email) => {
  let re =
    /^(?=[^@]*[A-Za-z])([a-zA-Z0-9])(([a-zA-Z0-9])*([\.-_+])?([a-zA-Z0-9]))*@(([a-zA-Z0-9\-])+(\.))+([a-zA-Z]{2,3})+$/i;
  return re.test(String(email).toLowerCase());
};

export const passwordValidation = (password) => {
  return /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!"#$%&'()*+,-./:;<=>?@[\]^_`{|}~]).{8,}/.test(
    password
  );
};
