import { AnimationControls, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   animationControls: AnimationControls;
};

export default function ModalButtonsContainer({
   children,
   animationControls,
}: Props) {
   return (
      <div className="overflow-hidden">
         <motion.div
            initial={{ y: "-100%" }}
            animate={animationControls}
            className="flex flex-col sm:flex-row gap-5"
         >
            {children}
         </motion.div>
      </div>
   );
}
