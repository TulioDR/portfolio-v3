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

   return (
      <Link
         href={href}
         className={`flex items-center relative px-5 h-10  ${
            isActive ? "text-white" : "hover:text-black/50 text-black"
         }`}
      >
         <span className="relative z-10">{children}</span>
         {isActive && (
            <motion.div
               layoutId="selected-link"
               style={{ borderRadius: "0.5rem" }}
               className="absolute inset-0 bg-orange-700"
               transition={{ type: "spring", duration: 0.6 }}
            />
         )}
      </Link>
   );
}
