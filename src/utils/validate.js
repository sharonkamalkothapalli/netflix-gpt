export const checkValidData = (name, email, password) => {
  const isNameValid =
    /^[a-zA-Z\u00C0-\u017F\u0400-\u04FF]+([ '-][a-zA-Z\u00C0-\u017F\u0400-\u04FF]+)*$/.test(
      name
    );

  const isEmailValid = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
    email
  );
  const isPasswordValid =
    /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\W)(?!.* ).{8,16}$/.test(password);

  if (name !== undefined && !isNameValid) return "Name Invalid";
  if (!isEmailValid) return "Email Invalid";
  if (!isPasswordValid) return "Password Invalid";

  return null;
};
