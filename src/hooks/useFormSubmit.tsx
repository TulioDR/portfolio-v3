import { SentStatusModel, ValuesModel } from "@/models/ContactFormModel";
import emailjs from "@emailjs/browser";
import { useRef, useState } from "react";

export default function useFormSubmit() {
   const [sentStatus, setSentStatus] = useState<SentStatusModel>(null);
   const formRef = useRef<HTMLFormElement>(null);

   const formSubmit = (_values: ValuesModel, { resetForm }: any) => {
      emailjs
         .sendForm(
            process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID!,
            process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID!,
            formRef.current!,
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

   return { formSubmit, formRef, sentStatus, setSentStatus };
}
