import { useCallback, useContext, useState } from 'react';
import { FaEnvelope, FaPhone, FaMapLocation } from 'react-icons/fa6';
import { sendContactEmail, contactFormValidator } from '../../services/ContactService';
import { FormType, FormErrorType } from './types';


import { Button } from '../../components/Button';

import { ThemeContext } from '../../contexts/ThemeContext';

export const Contact = () => {
  const theme = useContext(ThemeContext);

  const [form, setForm] = useState<FormType>({
    name: '',
    email: '',
    message: ''
  });

  const [formErrors, setFormErrors] = useState<FormErrorType>({
    name: '',
    email: '',
    message: ''
  });

  const [isSending, setIsSending] = useState(false);
  const [hasSent, setHasSent] = useState(false);

  const handleNameChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm({      
      ...form,
      name: evt.target.value,
    });
  }

  const handleEmailChange = (evt: React.ChangeEvent<HTMLInputElement>) => {
    setForm({      
      ...form,
      email: evt.target.value,
    });
  }

  const handleMessageChange = (evt: React.ChangeEvent<HTMLTextAreaElement>) => {
    setForm({      
      ...form,
      message: evt.target.value,
    });
  }

  const handleSubmitClick = useCallback(async (evt: React.FormEvent<HTMLFormElement>) => {
    evt.preventDefault();

    const newFormErrors: FormErrorType = {
      ...formErrors
    };


    Object.keys(form).forEach((field: string) => {
      console.log(JSON.stringify({ field, old_error: formErrors[field as FormFields] }, null, 2));

      const error = contactFormValidator(field, form[field as FormFields]);

      console.log(JSON.stringify({ field, error }, null, 2));

      newFormErrors[field as FormFields] = error;
    });

    console.log(JSON.stringify({ newFormErrors }, null, 2));

    setFormErrors({ ...newFormErrors });

    for (const field in newFormErrors) {
      if (!!newFormErrors[field as FormFields] && newFormErrors[field as FormFields].length > 0) {
        return;
      }
    }

    setIsSending(true);
  
    try {
      await sendContactEmail(form);

      setForm({
        name: '',
        email: '',
        message: ''
      });

      setIsSending(false);

      setHasSent(true);
      setTimeout(() => {
        setHasSent(false);
      }, 1000);
    } catch (e) {
      console.error(e);
      setIsSending(false);
    }
  }, [form, formErrors]);

  return (
    <div className="text-white py-20" id="contact">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">
          Contact Me
        </h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          <div className="flex-1">
            <h3 className={`text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r ${theme.gradientColors}`}>Let's Talk</h3>
            <p>I'm open to discussing web development projects or professional opportunities.</p>
            <div className="mb-4 mt-8">
              <FaEnvelope className={`inline-block ${theme.iconColorPrimary} mr-2`} />
              <a href="mailto:talavera.christopher@yahoo.com" className="hover:underline">
                talavera.christopher@yahoo.com
              </a>
            </div>
            <div className="mb-4">
              <FaPhone className={`inline-block ${theme.iconColorPrimary} mr-2`} />
              +19546704157
            </div>
            <div className="mb-4">
              <FaMapLocation className={`inline-block ${theme.iconColorPrimary} mr-2`} />
              <span>Charlotte, North Carolina</span>
            </div>
          </div>
          <div className="flex-1 w-full">
            <form className="space-y-4" onSubmit={handleSubmitClick}>
              <div>
                <label className="block mb-2" htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  className={`w-full p-2 rounded ${theme.inputBgColor} border ${formErrors.name ? 'border-red-600' : theme.inputBorderColor} focus:outline-none focus:border-yellow-400`}
                  placeholder="Enter your name"
                  onChange={handleNameChange}
                  value={form.name}
                />
                {formErrors.name && <p className="mt-2 text-xs text-red-600">{formErrors.name}</p>}
              </div>
              <div>
                <label className="block mb-2" htmlFor="name">Your Email</label>
                <input
                  id="email"
                  type="text"
                  className={`w-full p-2 rounded ${theme.inputBgColor} border ${formErrors.email ? 'border-red-600' : theme.inputBorderColor} focus:outline-none focus:border-yellow-400`}
                  placeholder="Enter your email"
                  onChange={handleEmailChange}
                  value={form.email}
                />
                {formErrors.email && <p className="mt-2 text-xs text-red-600">{formErrors.email}</p>}
              </div>
              <div>
                <label className="block mb-2" htmlFor="message">Message</label>
                <textarea
                  id="message"
                  rows={10} 
                  className={`resize-none w-full p-2 rounded ${theme.inputBgColor} border ${formErrors.message ? 'border-red-600' : theme.inputBorderColor} focus:outline-none focus:border-yellow-400`}
                  placeholder="Enter your message"
                  onChange={handleMessageChange}
                  value={form.message}
                />
                {formErrors.message && <p className="text-xs text-red-600">{formErrors.message}</p>}
              </div>
              <Button
                type="submit"
                text={isSending ? 'Sending' : 'Send'}
                twClasses={['px-8', 'py-2']}
                disabled={isSending}
                spinner={isSending}
              />
              {hasSent && <p className="text-xs text-green-600">Message has been sent. Thank you!</p>}
            </form>
          </div>
        </div>
      </div>
    </div>
  )
};