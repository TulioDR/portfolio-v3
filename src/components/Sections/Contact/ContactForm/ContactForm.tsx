import { useState } from "react";
import ContactInput from "./ContactInput";
import SendButton from "./SendButton";

export default function ContactForm() {
   const [isError, setIsError] = useState<boolean>(false);

   const handleClick = () => {
      setIsError((prev) => !prev);
   };
   return (
      <div className="w-full space-y-4">
         <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            <ContactInput isError={isError} placeholder="First Name" />
            <ContactInput isError={isError} placeholder="Last Name" />
            <ContactInput isError={isError} placeholder="Email" />
            <ContactInput
               isError={isError}
               placeholder="Phone Number (optional)"
            />
         </div>
         <div className="w-full relative h-32">
            <textarea
               placeholder="Write your message here"
               className="w-full h-full outline-none text-sm px-5 py-3 text-black rounded-xl"
            />
         </div>
         <SendButton onClick={handleClick} />
      </div>
   );
}
