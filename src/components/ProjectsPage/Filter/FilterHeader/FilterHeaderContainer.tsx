import { AnimationControls, motion } from "framer-motion";

interface Props {
   children: React.ReactNode;
   onClick: () => void;
   isFilterOpen: boolean;
   animationControls: AnimationControls;
}

export default function FilterHeaderContainer({
   children,
   onClick,
   isFilterOpen,
   animationControls,
}: Props) {
   return (
      <motion.div
         initial={{
            width: 40,
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
         }}
         animate={animationControls}
         onClick={isFilterOpen ? undefined : onClick}
         className={`h-10 w-full bg-main-primary rounded-t-lg text-white flex items-center justify-between overflow-hidden ${
            isFilterOpen
               ? "cursor-grab active:cursor-grabbing"
               : "rounded-b-lg cursor-pointer"
         }`}
      >
         {children}
      </motion.div>
   );
}
