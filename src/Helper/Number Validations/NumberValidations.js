function NumberValidations(value) {
  let result;
  const numberRegex = /^[0-9\-\+]{9,15}$/;

  if (numberRegex.test(value)) {
    console.log(true);
    result = "";
    return result;
  } else if (!numberRegex.test(value)) {
    console.log(false);
    result = "Phone Number is Not Valid";
    return result;
  }
}

export default NumberValidations;
