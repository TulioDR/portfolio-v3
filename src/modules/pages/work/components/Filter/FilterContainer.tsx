import { AnimationControls, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   containerControls: AnimationControls;
   innerControls: AnimationControls;
};

export default function FilterContainer({
   children,
   containerControls,
   innerControls,
}: Props) {
   return (
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none ">
         <motion.div
            drag={true}
            dragMomentum={false}
            initial={{ width: 10, height: 5, opacity: 0 }}
            animate={containerControls}
            className="pointer-events-auto bg-black text-white border border-white overflow-hidden"
         >
            <motion.div
               initial={{ opacity: 0 }}
               animate={innerControls}
               className="w-[calc(100vw-40px)] sm:w-[540px] md:w-[610px] flex-shrink-0 "
            >
               {children}
            </motion.div>
         </motion.div>
      </div>
   );
}
