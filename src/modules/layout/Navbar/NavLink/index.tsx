import Link from "next/link";
import React, { useEffect, useState } from "react";
import {
   AnimatePresence,
   motion,
   // useScroll,
   // useTransform,
} from "framer-motion";
import { useRouter } from "next/router";

type Props = {
   href: string;
   children: React.ReactNode;
};

export default function NavLink({ href, children }: Props) {
   const [isActive, setIsActive] = useState<boolean>(false);

   const { route } = useRouter();

   useEffect(() => {
      setIsActive(href === route);
   }, [route, href]);

   // const { scrollYProgress } = useScroll();
   // const width = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

   return (
      <Link
         href={href}
         className={`flex items-center text-white relative px-5 rounded-full duration-300 ${
            isActive ? "" : " "
         }`}
      >
         <span className="relative z-10 mix-blend-exclusion">{children}</span>
         <AnimatePresence>
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
         </AnimatePresence>
         {isActive && (
            <motion.div
               layoutId="selected-link"
               style={{ borderRadius: 4 }}
               className="absolute inset-0 bg-white overflow-hidden"
               transition={{ type: "spring", duration: 0.6 }}
            >
               {/* <motion.div style={{ width }} className="h-full bg-gray-300" /> */}
            </motion.div>
         )}
      </Link>
   );
}
