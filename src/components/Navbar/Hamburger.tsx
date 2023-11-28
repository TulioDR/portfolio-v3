import useNavbarContext from "@/context/NavbarContext";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
   isMenuOpen: boolean;
   toggleMenu: () => void;
}
export default function Hamburger({ isMenuOpen, toggleMenu }: Props) {
   const { isWhite } = useNavbarContext();
   const [isAnimating, setIsAnimating] = useState(false);

   const handleClick = () => {
      toggleMenu();
      setIsAnimating(true);
      setTimeout(() => {
         setIsAnimating(false);
      }, 500);
   };
   return (
      <button
         className="flex flex-col space-y-4 py-2 pointer-events-auto"
         onClick={isAnimating ? undefined : handleClick}
      >
         <motion.span
            animate={{
               y: isMenuOpen ? 10 : 0,
               rotate: isMenuOpen ? -45 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`w-12 h-1 duration-300 ${
               isWhite || isMenuOpen ? "bg-white" : "bg-black"
            }`}
         ></motion.span>
         <motion.span
            animate={{
               y: isMenuOpen ? -10 : 0,
               rotate: isMenuOpen ? 45 : 0,
            }}
            transition={{ duration: 0.3 }}
            className={`w-12 h-1 duration-300 ${
               isWhite || isMenuOpen ? "bg-white" : "bg-black"
            }`}
         ></motion.span>
      </button>
   );
}
