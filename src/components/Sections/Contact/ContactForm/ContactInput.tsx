import { AnimatePresence, motion } from "framer-motion";

interface Props {
   placeholder: string;
   isError: boolean;
   nameInputRef?: React.RefObject<HTMLInputElement>;
}

export default function ContactInput({
   placeholder,
   isError,
   nameInputRef,
}: Props) {
   return (
      <div>
         <input
            ref={nameInputRef}
            type="text"
            className="w-full outline-none h-12 text-sm bg-white text-black px-5 rounded-xl"
            placeholder={placeholder}
         />
         <AnimatePresence>
            {isError && (
               <motion.div
                  initial={{ height: 0, marginTop: 0 }}
                  animate={{ height: 16, marginTop: 8 }}
                  exit={{ height: 0, marginTop: 0 }}
                  transition={{ duration: 0.4 }}
                  className="w-full bg-red-800"
               ></motion.div>
            )}
         </AnimatePresence>
      </div>
   );
}
