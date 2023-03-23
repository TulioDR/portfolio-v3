import useBackFromProjectsContext from "@/context/BackFromProjectsContext";
import { motion } from "framer-motion";
import Link from "next/link";

export default function BackButton() {
   // const { setIsBackFromProjects } = useBackFromProjectsContext();
   const handleClick = () => {
      // setIsBackFromProjects(true);
   };
   return (
      <motion.div
         initial={{ width: 0 }}
         animate={{ width: 80 }}
         exit={{ width: 0 }}
         transition={{ duration: 0.4 }}
         className="overflow-hidden ml-auto"
      >
         <Link
            onClick={handleClick}
            href="/#projects"
            className="py-2 bg-slate-800 text-white w-20 text-center block shrink-0"
         >
            Go Back
         </Link>
      </motion.div>
   );
}
