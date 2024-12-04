/**
 * A union type representing the valid field names in the contact form.
 * 
 * This type restricts the form fields to three possible values: 'name', 'email', and 'message'.
 * It is used to ensure that only these specific field names are used when referencing the form fields.
 * 
 * @typedef {('name' | 'email' | 'message')} FormFields
 */
export type FormFields = 'name' | 'email' | 'message';

/**
 * Represents the form data object with specific fields: 'name', 'email', and 'message'.
 * 
 * This type defines a structure where each of the form fields ('name', 'email', 'message') 
 * is guaranteed to be a string.
 * 
 * @typedef {Object} FormType
 * @property {string} name - The name field of the form, expected to be a string.
 * @property {string} email - The email field of the form, expected to be a string.
 * @property {string} message - The message field of the form, expected to be a string.
 */
export type FormType = {
  [key in FormFields]: string;
};

/**
 * Represents the structure for error messages related to the form fields.
 * 
 * This type defines a structure where each of the form fields ('name', 'email', 'message') 
 * has an associated string error message. If there is no error for a field, the value will be an empty string.
 * 
 * @typedef {Object} FormErrorType
 * @property {string} name - The error message related to the 'name' field, or an empty string if no error.
 * @property {string} email - The error message related to the 'email' field, or an empty string if no error.
 * @property {string} message - The error message related to the 'message' field, or an empty string if no error.
 */
export type FormErrorType = {
  [key in FormFields]: string;
};
