import {
   AnimatePresence,
   MotionValue,
   useMotionValueEvent,
   motion,
} from "framer-motion";
import React, { useState } from "react";

type Props = {
   scroll: MotionValue<number>;
};

export default function AboutHeaderMessage({ scroll }: Props) {
   const [showMessage, setShowMessage] = useState<boolean>(false);

   useMotionValueEvent(scroll, "change", (current) => {
      if (current >= 1) setShowMessage(true);
      else setShowMessage(false);
   });
   return (
      <motion.div
         animate={{ opacity: showMessage ? 1 : 0 }}
         transition={{ duration: 0.2 }}
         className="flex gap-1 items-center justify-center text-sm"
      >
         <div>You can press the button</div>
         <div className="aspect-square w-10 rounded-full bg-white"></div>
         <div>to expand the cards</div>
      </motion.div>
   );
}
