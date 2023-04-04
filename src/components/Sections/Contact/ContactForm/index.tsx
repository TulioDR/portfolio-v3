import SendButton from "./SendButton";
import Input from "./Input";
import { Formik, Form } from "formik";
import { ValuesModel } from "@/models/ContactFormModel";
import formValidation from "@/utils/formValidation";

interface Props {
   nameInputRef: React.RefObject<HTMLInputElement>;
}

export default function ContactForm({ nameInputRef }: Props) {
   const initialValues: ValuesModel = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
   };
   const handleSubmit = (values: ValuesModel) => {
      console.log("Submit");
      console.log(values);
   };
   return (
      <Formik
         initialValues={initialValues}
         validate={formValidation}
         onSubmit={handleSubmit}
      >
         {({ errors, touched }) => (
            <Form className="w-full space-y-4 bg-gray-200 p-4">
               <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  <Input
                     name="firstName"
                     nameInputRef={nameInputRef}
                     placeholder="First Name"
                     errors={errors}
                     touched={touched}
                  />
                  <Input
                     name="lastName"
                     placeholder="Last Name"
                     errors={errors}
                     touched={touched}
                  />
                  <Input
                     name="email"
                     placeholder="Email"
                     errors={errors}
                     touched={touched}
                  />
                  <Input
                     name="phone"
                     placeholder="Phone Number (optional)"
                     errors={errors}
                     touched={touched}
                  />
               </div>
               <Input
                  name="message"
                  textarea
                  placeholder="Write your message here"
                  errors={errors}
                  touched={touched}
               />
               <SendButton />
            </Form>
         )}
      </Formik>
   );
}
