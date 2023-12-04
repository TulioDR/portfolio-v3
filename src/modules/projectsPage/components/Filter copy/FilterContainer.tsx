import { AnimationControls, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   isFilterOpen: boolean;
   filterContainerControls: AnimationControls;
};

export default function FilterContainer({
   children,
   isFilterOpen,
   filterContainerControls,
}: Props) {
   return (
      <motion.div
         drag={isFilterOpen}
         animate={filterContainerControls}
         dragMomentum={false}
         className={`z-10 rounded-full bg-black border border-white text-white pointer-events-auto ${
            isFilterOpen
               ? "fixed top-1/2 left-1/2 -translate-y-1/2"
               : "absolute top-0 left-0 h-full w-full"
         }`}
      >
         {children}
      </motion.div>
   );
}
