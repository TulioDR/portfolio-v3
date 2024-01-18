import React from "react";
import { motion } from "framer-motion";

type Props = {};

export default function BrightScreen({}: Props) {
   return (
      <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         exit={{ opacity: 0 }}
         transition={{ duration: 0.2 }}
         whileHover={{ boxShadow: "0px 0px 0px 0px #fff" }}
         style={{ boxShadow: "0px 0px 30px 0px #fff" }}
         className="w-full h-full bg-white rounded-2xl"
      />
   );
}
