import { ContactErrorsModel, ValuesModel } from "@/models/ContactFormModel";

const checkName = (name: string): boolean => {
   return /^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(name);
};
const checkEmail = (email: string): boolean => {
   return /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(email);
};

export default function formValidation(values: ValuesModel) {
   let errors: ContactErrorsModel = {};

   const { firstName, lastName, email, message } = values;

   if (!firstName) errors.firstName = "No name";
   else if (!checkName(firstName))
      errors.firstName = "Name should only contain letters and spaces";

   if (!lastName) errors.lastName = "No name";
   else if (!checkName(lastName))
      errors.lastName = "Name should only contain letters and spaces";

   if (!email) errors.email = "No email";
   else if (!checkEmail(email)) errors.email = "Invalid Email";

   if (!message) errors.message = "Please write a message";

   return errors;
}
