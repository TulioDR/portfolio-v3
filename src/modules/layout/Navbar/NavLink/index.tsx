import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";

type Props = {
   href: string;
   children: React.ReactNode;
   openMenu: () => void;
};

export default function NavLink({ href, children }: Props) {
   const { route, push } = useRouter();
   const [isActive, setIsActive] = useState<boolean>(false);
   useEffect(() => {
      setIsActive(href === route);
   }, [route, href]);

   // const [showMenu, setShowMenu] = useState<boolean>(false);

   // const openMenu = () => {
   //    setShowMenu((prev) => !prev);
   // };

   const handleClick = () => {
      // if (isActive) openMenu();
      // else push(href);
      push(href);
   };

   return (
      <button
         onClick={handleClick}
         className={`flex items-center text-white relative px-5 rounded-full duration-300 ${
            isActive ? "" : " "
         }`}
      >
         <span className="relative z-10 mix-blend-exclusion">{children}</span>
         {/* <AnimatePresence>
            {isActive && (
               <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: "auto" }}
                  exit={{ width: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="overflow-hidden z-10 relative"
               >
                  <div className="ml-2 h-6 aspect-square text-black">
                     <span className="material-symbols-outlined ">menu</span>
                  </div>
               </motion.div>
            )}
         </AnimatePresence> */}
         {isActive && (
            <motion.div
               layoutId="selected-link"
               style={{ borderRadius: 4 }}
               className={`absolute bottom-0 inset-0 left-0 bg-white shadow-xl`}
               transition={{ type: "spring", duration: 0.6 }}
            >
               {/* <motion.div style={{ width }} className="h-full bg-gray-300" /> */}
            </motion.div>
         )}
      </button>
   );
}
