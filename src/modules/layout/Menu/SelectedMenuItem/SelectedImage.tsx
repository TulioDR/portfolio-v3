import React from "react";
import { motion } from "framer-motion";

type Props = {
   layoutId: string;
};

export default function SelectedImage({ layoutId }: Props) {
   return (
      <motion.div
         layoutId={layoutId}
         transition={{
            duration: 0.5,
            ease: [0.7, 0, 0.2, 1],
         }}
         className="aspect-video w-full bg-primary  border-4 border-b-gray-200"
      ></motion.div>
   );
}
