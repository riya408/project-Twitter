
export function isValidEmail(email) {
 
  let regEx =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*(\.\w{2,3})+$/;

  if (email === "") {
    return "Enter Email";
  } else if (regEx.test(email)) {
    return "Valid Email";
  } else if (!regEx.test(email)) {
    return "Invalid email";
  }
}

export function isValidPass(password) {
  const regExp = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s).{6,20}$/;
  if (password === "") {
    return "Enter Password";
  } else if (regExp.test(password)) {
    return "Valid Password";
  } else if (!regExp.test(password)) {
    return "Invalid Password";
  }
}

export function isValidPhone(Phone) {
  const regExp = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (Phone === "") {
    return "Enter Phone Number";
  } else if (regExp.test(Phone)) {
    return "Valid Phone number";
  } else if (!regExp.test(Phone)) {
    return "Invalid Phone number";
  }
}
export function usernameValidation(username) {
  const reg = /^[A-Za-z][A-Za-z0-9_]{7,29}$/;
  if (username === "") {
    return "Enter Username";
  } else if (reg.test(username)) {
    return "Valid Username";
  } else if (!reg.test(username)) {
    return "Invalid Username";
  }
}
