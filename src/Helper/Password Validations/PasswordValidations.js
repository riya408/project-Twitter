function PasswordValidations(value) {
  let result;
  const PasswordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;

  if (PasswordRegex.test(value)) {
    console.log(true);
    result = "";
    return result;
  } else if (!PasswordRegex.test(value) && value !== "") {
    console.log(false);
    result = "Password is Not Valid";
    return result;
  }
}

export default PasswordValidations;
