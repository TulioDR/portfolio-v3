import Link from "next/link";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
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

   // console.log()

   return (
      <Link
         href={href}
         className={`flex items-center relative px-5 h-10 text-white ${
            isActive ? "" : "hover:text-white/80"
         }`}
      >
         <span className="relative z-10">{children}</span>
         {isActive && (
            <div className="w-full absolute left-0 top-full flex justify-center gap-1">
               <motion.div
                  layoutId="selected-nav-link"
                  style={{ borderRadius: 9999 }}
                  className="h-2 aspect-square bg-orange-500"
                  transition={{ type: "spring", duration: 0.6 }}
               />

               {route === "/" && (
                  <>
                     <div className="h-2 aspect-square bg-white rounded-full" />
                     <div className="h-2 aspect-square bg-white rounded-full" />
                     <div className="h-2 aspect-square bg-white rounded-full" />
                  </>
               )}
            </div>
         )}
         {/* {isActive && (
            <motion.div
               layoutId="selected-link"
               style={{ borderRadius: "0.5rem" }}
               className="absolute inset-0 bg-orange-700"
               transition={{ type: "spring", duration: 0.6 }}
            />
         )} */}
      </Link>
   );
}
