import { useState } from "react";
import SendButton from "./SendButton";
import Input from "./Input";
import { Formik, Form } from "formik";

interface Props {
   nameInputRef: React.RefObject<HTMLInputElement>;
}

export default function ContactForm({ nameInputRef }: Props) {
   const [isError, setIsError] = useState<boolean>(false);

   const handleClick = () => {
      setIsError((prev) => !prev);
   };
   const handleSubmit = () => {
      console.log("Submit");
   };
   const initialValues = {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
   };
   return (
      <Formik initialValues={initialValues} onSubmit={handleSubmit}>
         {({}) => (
            <Form className="w-full space-y-4 bg-gray-200 p-4">
               <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
                  <Input
                     name="firstName"
                     nameInputRef={nameInputRef}
                     isError={isError}
                     placeholder="First Name"
                  />
                  <Input
                     name="lastName"
                     isError={isError}
                     placeholder="Last Name"
                  />
                  <Input name="email" isError={isError} placeholder="Email" />
                  <Input
                     name="phone"
                     isError={isError}
                     placeholder="Phone Number (optional)"
                  />
               </div>
               <Input
                  name="phone"
                  textarea
                  isError={isError}
                  placeholder="Write your message here"
               />
               <SendButton onClick={handleClick} />
            </Form>
         )}
      </Formik>
   );
}
