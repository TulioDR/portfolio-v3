import { motion } from "framer-motion";
type Props = {};

export default function ProjectModalBackdrop({}: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.4 }}
         className="bg-black/80 w-full h-full"
      />
   );
}
