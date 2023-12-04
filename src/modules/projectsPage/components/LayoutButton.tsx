import useScrollContext from "@/context/ScrollContext";
import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   onClick: () => void;
   isActive: boolean;
};

export default function LayoutButton({ children, onClick, isActive }: Props) {
   const { refreshScroll } = useScrollContext();
   const handleClick = () => {
      onClick();
      refreshScroll();
   };

   return (
      <button
         onClick={handleClick}
         className={`h-10 px-5 text-white relative font-medium ${
            isActive ? "" : " hover:text-white/50"
         }`}
      >
         {isActive && (
            <motion.div
               layoutId="selected"
               style={{ borderRadius: 9999 }}
               className="absolute inset-0 bg-white"
               transition={{ type: "spring", duration: 0.6 }}
            />
         )}
         <span className="h-full flex items-center relative z-10 mix-blend-exclusion">
            {children}
         </span>
      </button>
   );
}
