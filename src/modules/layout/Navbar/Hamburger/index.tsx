import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

type Props = {};

export default function Hamburger({}: Props) {
   const [showMenu, setShowMenu] = useState<boolean>(false);

   const handleClick = () => setShowMenu((prev) => !prev);

   return (
      <>
         <AnimatePresence>
            {showMenu && (
               <motion.div
                  initial={{
                     y: "-50%",
                     x: "-100%",
                     borderTopRightRadius: "50%",
                     borderBottomRightRadius: "50%",
                  }}
                  animate={{
                     x: "0%",
                     borderTopRightRadius: 0,
                     borderBottomRightRadius: 0,
                  }}
                  exit={{
                     x: "-100%",
                     borderTopRightRadius: "50%",
                     borderBottomRightRadius: "50%",
                  }}
                  transition={{ duration: 0.8, ease: [0.7, 0, 0.2, 1] }}
                  className="fixed left-0 top-1/2 w-screen aspect-square bg-gray-200"
               ></motion.div>
            )}
         </AnimatePresence>
         <motion.button
            onClick={handleClick}
            className="w-10 h-10 flex flex-col items-start justify-center gap-2 z-10"
         >
            <div className="w-full bg-white group-hover:bg-black h-0.5" />
            <div className="w-1/2 bg-white group-hover:bg-black h-0.5" />
            <div className="w-full bg-white group-hover:bg-black  h-0.5" />
         </motion.button>
      </>
   );
}
