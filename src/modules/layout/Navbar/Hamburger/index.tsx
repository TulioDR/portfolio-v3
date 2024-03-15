import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Menu from "../../Menu";

type Props = {};

export default function Hamburger({}: Props) {
   const [showMenu, setShowMenu] = useState<boolean>(false);

   const handleClick = () => setShowMenu((prev) => !prev);

   return (
      <>
         <AnimatePresence>{showMenu && <Menu />}</AnimatePresence>
         <motion.button
            onClick={handleClick}
            className="h-5 w-10 flex flex-col items-start justify-between z-50"
         >
            <div
               className={`w-full duration-700 h-0.5 ${
                  showMenu
                     ? "bg-white rotate-45 translate-y-[9px]"
                     : "bg-white "
               }`}
            />
            <div
               className={`duration-700 h-0.5 ${
                  showMenu ? "bg-white w-0" : "bg-white w-1/2"
               }`}
            />
            <div
               className={`w-full duration-700 h-0.5 ${
                  showMenu
                     ? "bg-white -rotate-45 -translate-y-[9px]"
                     : "bg-white"
               }`}
            />
         </motion.button>
      </>
   );
}
