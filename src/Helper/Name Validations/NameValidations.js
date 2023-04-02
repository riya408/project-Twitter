function NameValidations(value) {
  let result;
  const NameRegex = /^[A-Za-z\s]+$/;

  if (NameRegex.test(value)) {
    console.log(true);
    result = "";
    return result;
  } else if (!NameRegex.test(value) && value !== "") {
    console.log(false);
    result = "Name is Not Valid";
    return result;
  }
}

export default NameValidations;
