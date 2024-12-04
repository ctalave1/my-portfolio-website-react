import axios from 'axios';

import { FormType } from '../../sections/Contact/types';

/**
 * Sends a contact email using a request to my Express API.
 * 
 * This function sends the provided contact information (name, email, and message) 
 * to the /mailer API endpoint via a POST request.
 * 
 * @async
 * @function
 * 
 * @param {FormType} param - The form data object containing the contact details.
 * @param {string} param.name - The name of the person submitting the contact form.
 * @param {string} param.email - The email address of the person submitting the contact form.
 * @param {string} param.message - The message that the user wants to send.
 * 
 * @returns {Promise<void>} A promise that resolves once the email is sent successfully, or logs an error if the request fails.
 * 
 * @throws {Error} Throws an error if the POST request to the Express API fails.
 */
export const sendContactEmail = async ({ name, email, message }: FormType): Promise<void> => {
  try {
    await axios.post(`${import.meta.env.VITE_API_BASE_URL}/mailer`, {
      name,
      email,
      message
    }, {
      headers: {
        'Content-Type': 'application/json'
      }
    });
  } catch (e) {
    console.error(e);
    throw e;
  }
};

/**
 * Validates the input value for a contact form field based on the field's name.
 * 
 * This function checks the validity of the value provided for a specific form field 
 * (such as name, email, or message) and returns an appropriate error message or 
 * an empty string if the value is valid.
 * 
 * @param {string} name - The name of the form field being validated (e.g., 'name', 'email', 'message').
 * @param {string} value - The value to be validated for the specified field.
 * 
 * @returns {string} A validation error message if the value is invalid, or an empty string if valid.
 * - For the 'name' field: returns error if the name is empty or contains non-latin characters.
 * - For the 'email' field: returns error if the email is empty or does not match a valid email pattern.
 * - For the 'message' field: returns error if the message is empty or contains invalid characters.
 * 
 * @example
 * // Validating a name
 * const nameError = contactFormValidator('name', 'John Doe');
 * console.log(nameError); // Returns '' if valid, otherwise an error message.
 * 
 * @example
 * // Validating an email
 * const emailError = contactFormValidator('email', 'example@example.com');
 * console.log(emailError); // Returns '' if valid, otherwise an error message.
 * 
 * @example
 * // Validating a message
 * const messageError = contactFormValidator('message', 'Hello, how are you?');
 * console.log(messageError); // Returns '' if valid, otherwise an error message.
 */
export const contactFormValidator = (name: string, value: string): string => {
  switch (name) {
    case 'name':
      if (!value) {
        return 'Name is required';
      }else if (!value.match(
        /^[A-Za-zÀ-ÿÁ-ÿçÇéèêëîïôöùüñÑ\-'.]+(?:\s+[A-Za-zÀ-ÿÁ-ÿçÇéèêëîïôöùüñÑ\-'.]+)*(\s+(Jr\.|Sr\.|II|III|IV|V|VI|VII|VIII|IX|X|[A-Za-z]+))?$/
      )) {
        return 'Only names using the latin alphabet are valid'
      } else {
        return '';
      }
    case 'email':
      if (!value) {
        return 'Email is required';
      }else if (!value.match(
        // eslint-disable-next-line no-useless-escape
        /^[a-z0-9]([a-z0-9_\-\.]*)@([a-z0-9_\-\.]*)(\.[a-z]{2,4}(\.[a-z]{2}){0,2})$/i
      )) {
        return 'Enter a valid email address';
      } else {
        return '';
      }
    case 'message':
      if (!value) {
        return 'Message is required';
      } 
      
      if (!value.match(
        // eslint-disable-next-line no-useless-escape
        /^[A-Za-z0-9[.,!?;:'"(){}\[\]<>/\\-_*+=&|~^%$#@ \n]*$/
      )) {
        // eslint-disable-next-line no-useless-escape
        return `Message may only contain alphanumeric characters, spaces, new lines, and these specific special characters: . , ! ? ; : ' " ( ) { } [ ] < > / \- _ * + = & | ~ ^ % $ # @`;
      } else {
        return '';
      }
  }

  return '';
}