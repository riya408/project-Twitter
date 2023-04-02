function EmailValidations(value) {
  let result;
  const EmailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

  if (EmailRegex.test(value)) {
    console.log(true);
    result = "";
    return result;
  } else if (!EmailRegex.test(value) && value !== "") {
    console.log(false);
    result = "Email is Not Valid";
    return result;
  }
}

export default EmailValidations;
