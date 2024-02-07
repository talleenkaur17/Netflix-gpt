export const validateFormData = ({ name, email, password }, isSignInForm) => {
   const isNameValid = !name || /^[a-zA-Z]+(?:[' -][a-zA-Z]+)?$/.test(name);
   const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
   const isPasswordValid = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);
 
   if (!isSignInForm && !isNameValid) return "Invalid Name";
   if (!isEmailValid) return "Invalid Email Id";
   if (!isPasswordValid) return "Invalid Password";
 
   return null;
 };