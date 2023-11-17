/**
 * Validate if email is valid
 * @param {String} email email to validate
 * @returns {Boolean} true if email is valid
 */
export function isValidEmail(email) {
  const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  return regex.test(email);
}

/**
 * Validate if string meets a minimum length
 * @param {String} str string to validate
 * @param {Number} minLength length to validate
 * @returns {Boolean} true if string is greater or equal than minlength
 */
export const minLength = (str, minlength) => str?.length >= minlength;

/**
 * Validate if string has at least one uppercase letter
 * @param {String} string string to validate
 * @returns {Boolean} true if string has at least one uppercase letter
 */
export const hasUppercase = string => /[A-Z]/.test(string);

/**
 * Validate if string has at least one lowercase letter
 * @param {String} string string to validate
 * @returns {Boolean} true if string has at least one lowercase letter
 */
export const hasLowercase = string => /[a-z]/.test(string);

/**
 * Validate if string has at least one special character
 * @param {String} string string to validate
 * @returns {Boolean} true if string has at least one special character
 */
export const hasSpecialCharacters = string => /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(string);


export const passwordValidator = (password, errorMessajes = {
  hasUppercase: "Password must have at least one uppercase letter",
  hasLowercase: "Password must have at least one lowercase letter",
  hasSpecialCharacters: "Password must have at least one special character",
  minLength: "Password must be at least 8 characters long"
}) => {
  const errors = [];
  !hasUppercase(password) && errors.push(errorMessajes.hasUppercase);
  !hasLowercase(password) && errors.push(errorMessajes.hasLowercase);
  !hasSpecialCharacters(password) && errors.push(errorMessajes.hasSpecialCharacters);
  !minLength(password, 8) && errors.push(errorMessajes.minLength);

  return errors
}