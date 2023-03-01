import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
   icon: string;
};

export default function LayoutButton({ onClick, icon }: Props) {
   return (
      <motion.button
         onClick={onClick}
         className="rounded-full aspect-square w-10 grid place-content-center hover:bg-slate-800 hover:text-white"
      >
         <span className="material-icons">{icon}</span>
      </motion.button>
   );
}