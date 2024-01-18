import { motion } from "framer-motion";

type Props = {
   icon: string;
   onClick: () => void;
   isActive: boolean;
};

export default function LayoutButton({ icon, onClick, isActive }: Props) {
   return (
      <button
         onClick={onClick}
         className={`h-10 px-4 text-white relative font-medium ${
            isActive ? "" : " hover:text-white/50"
         }`}
      >
         {isActive && (
            <motion.div
               layoutId="selected-layout"
               style={{ borderRadius: 9999 }}
               className="absolute inset-0 bg-black"
               transition={{ type: "spring", duration: 0.6 }}
            />
         )}
         <span className="h-full flex items-center relative z-10 mix-blend-exclusion">
            <span className="material-symbols-outlined">{icon}</span>
         </span>
      </button>
   );
}
