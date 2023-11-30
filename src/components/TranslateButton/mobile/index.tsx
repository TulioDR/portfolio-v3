import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import TranslateIconMobile from "./TranslateIconMobile";
import SwitchLanBtn from "../desktop/SwitchLanBtn";
import CloseTranslateMobile from "./CloseTranslateMobile";

export default function TranslateButtonMobile() {
   const [isOpen, setIsOpen] = useState<boolean>(false);
   const open = () => setIsOpen(true);
   const close = () => setIsOpen(false);

   return (
      <div
         className={`h-14 duration-200 flex rounded-full overflow-hidden bg-main-orange text-white ${
            isOpen ? "w-64" : "w-14"
         }`}
      >
         <AnimatePresence>
            {isOpen && <SwitchLanBtn key="switch" />}
         </AnimatePresence>
         <div className="flex justify-end">
            <AnimatePresence mode="wait">
               {isOpen ? (
                  <CloseTranslateMobile onClick={close} key="close" />
               ) : (
                  <TranslateIconMobile onClick={open} key="open" />
               )}
            </AnimatePresence>
         </div>
      </div>
   );
}
