import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
   isMenuOpen: boolean;
   toggleMenu: () => void;
}
export default function Hamburger({ isMenuOpen, toggleMenu }: Props) {
   // const { toggleMenu, isMenuOpen, isWhiteBackground } = useNavbarContext();
   const [isAnimating, setIsAnimating] = useState(false);

   const handleClick = () => {
      toggleMenu();
      setIsAnimating(true);
      setTimeout(() => {
         setIsAnimating(false);
      }, 500);
   };

   const isWhiteBackground = true;
   return (
      <button
         className="flex flex-col space-y-4 py-2"
         onClick={isAnimating ? undefined : handleClick}
      >
         <motion.span
            animate={{
               y: isMenuOpen ? 10 : 0,
               rotate: isMenuOpen ? -45 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`${
               !isWhiteBackground ? "bg-white" : "bg-black"
            }  w-12 h-1`}
         ></motion.span>
         <motion.span
            animate={{
               y: isMenuOpen ? -10 : 0,
               rotate: isMenuOpen ? 45 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`${
               !isWhiteBackground ? "bg-white" : "bg-black"
            }  w-12 h-1`}
         ></motion.span>
      </button>
   );
}
