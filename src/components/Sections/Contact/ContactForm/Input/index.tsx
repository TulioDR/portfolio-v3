import { useState } from "react";
import InputBorder from "./InputBorder";
import InputError from "./InputError";
import { Field } from "formik";

interface Props {
   name: string;
   textarea?: true;
   placeholder: string;
   isError: boolean;
   nameInputRef?: React.RefObject<HTMLInputElement>;
}

export default function Input({
   name,
   textarea,
   placeholder,
   isError,
   nameInputRef,
}: Props) {
   const [isOnFocus, setIsOnFocus] = useState<boolean>(false);

   return (
      <div>
         <div className={`relative ${textarea ? "h-32" : ""}`}>
            <Field
               innerRef={nameInputRef}
               name={name}
               as={textarea ? "textarea" : "input"}
               onFocus={() => setIsOnFocus(true)}
               onBlur={() => setIsOnFocus(false)}
               className={`w-full h-full outline-none text-xs sm:text-sm bg-white text-black px-5 py-3`}
               placeholder={placeholder}
               autoComplete="off"
            />
            {/* <div className="h-[2px] w-full bg-gray-700 absolute bottom-0"></div> */}
            <InputBorder isOnFocus={isOnFocus} />
         </div>
         <InputError isError={isError} />
      </div>
   );
}
