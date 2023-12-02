import { AnimationControls, motion } from "framer-motion";

interface Props {
   children: React.ReactNode;
   isFilterOpen: boolean;
   animationControls: AnimationControls;
}

export default function FilterHeaderContainer({
   children,
   isFilterOpen,
   animationControls,
}: Props) {
   return (
      <motion.div
         initial={{ width: 40 }}
         animate={animationControls}
         className={`h-10 overflow-hidden ${
            isFilterOpen
               ? "cursor-grab active:cursor-grabbing"
               : "cursor-pointer"
         }`}
      >
         <div className="flex items-center justify-between h-full w-[calc(100vw-40px)] sm:w-[540px] md:w-[610px] flex-shrink-0">
            {children}
         </div>
      </motion.div>
   );
}
