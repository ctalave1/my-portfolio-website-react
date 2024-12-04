import axios from 'axios';

type FormType = {
  [key: string]: string;
};

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
    console.error(e)
  }
};

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