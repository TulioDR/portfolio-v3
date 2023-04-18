import { AnimationControls, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isFilterOpen: boolean;
   animationControls: AnimationControls;
};

export default function FilterContainer({
   children,
   isFilterOpen,
   animationControls,
}: Props) {
   return (
      <motion.div
         drag={isFilterOpen}
         animate={animationControls}
         dragMomentum={false}
         className={`absolute top-0 left-0 z-30 w-max`}
      >
         <div className="relative">{children}</div>
      </motion.div>
   );
}
