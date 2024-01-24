import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BrightScreen({}: Props) {
   return (
      <motion.div
         initial={{ opacity: 0, boxShadow: "0px 0px 0px 0px #FFDB81" }}
         animate={{ opacity: 1, boxShadow: "0px 0px 40px 0px #FFDB81" }}
         exit={{ opacity: 0, boxShadow: "0px 0px 0px 0px #FFDB81" }}
         transition={{ duration: 0.2 }}
         whileHover={{ boxShadow: "0px 0px 0px 0px #FFDB81" }}
         style={{ boxShadow: "0px 0px 40px 0px #FFDB81" }}
         className="absolute z-10 top-0 left-0 w-full h-full pointer-events-auto rounded-2xl bg-gradient-to-tl from-orange-700 to-[#FFF16A]"
         // className="absolute z-10 top-0 left-0 w-full h-full pointer-events-auto rounded-2xl bg-gradient-to-tl from-[#BA662C] to-[#FFDB81]"
      />
   );
}
