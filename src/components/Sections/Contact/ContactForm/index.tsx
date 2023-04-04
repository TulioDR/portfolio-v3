import SendButton from "./SendButton";
import Input from "./Input";
import { Formik, Form } from "formik";
import { SentStatusModel, ValuesModel } from "@/models/ContactFormModel";
import formValidation from "@/utils/formValidation";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";
import SentStatus from "./SentStatus";

interface Props {
   nameInputRef: React.RefObject<HTMLInputElement>;
}

export default function ContactForm({ nameInputRef }: Props) {
   const [sentStatus, setSentStatus] = useState<SentStatusModel>(null);

   const initialValues: ValuesModel = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "",
   };
   const form = useRef<HTMLFormElement>(null);
   const handleSubmit = (_values: ValuesModel, { resetForm }: any) => {
      emailjs
         .sendForm(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
            form.current!,
            process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY!
         )
         .then(
            (_result) => {
               resetForm();
               setSentStatus("success");
               setTimeout(() => setSentStatus(null), 4000);
            },
            (error) => {
               console.log(error);
               setSentStatus("fail");
            }
         );
   };
   return (
      <>
         <SentStatus sentStatus={sentStatus} setSentStatus={setSentStatus} />
         <Formik
            initialValues={initialValues}
            validate={formValidation}
            onSubmit={handleSubmit}
         >
            {({ errors, touched }) => (
               <Form ref={form} className="w-full space-y-4 bg-gray-200 p-4">
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
      </>
   );
}
