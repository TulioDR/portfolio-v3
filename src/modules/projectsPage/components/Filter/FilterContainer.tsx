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
         className="absolute top-0 left-0 z-10 rounded-lg bg-main-primary"
      >
         <div className="relative">{children}</div>
      </motion.div>
   );
}
