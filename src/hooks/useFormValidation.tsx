import useLanguageContext from "@/context/LanguageContext";
import { ContactErrorsModel, ValuesModel } from "@/models/ContactFormModel";

export default function useFormValidation() {
   const { currentLanguage } = useLanguageContext();
   const {
      noFirstName,
      invalidFirstName,
      noLastName,
      invalidLastName,
      noEmail,
      invalidEmail,
      noMessage,
   } = currentLanguage.contact.errors;

   const checkName = (name: string): boolean => {
      return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name);
   };
   const checkEmail = (email: string): boolean => {
      return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
   };

   const formValidation = (values: ValuesModel) => {
      let errors: ContactErrorsModel = {};
      const { firstName, lastName, email, message } = values;

      if (!firstName) errors.firstName = noFirstName;
      else if (!checkName(firstName)) errors.firstName = invalidFirstName;

      if (!lastName) errors.lastName = noLastName;
      else if (!checkName(lastName)) errors.lastName = invalidLastName;

      if (!email) errors.email = noEmail;
      else if (!checkEmail(email)) errors.email = invalidEmail;

      if (!message) errors.message = noMessage;

      return errors;
   };
   return { formValidation };
}
