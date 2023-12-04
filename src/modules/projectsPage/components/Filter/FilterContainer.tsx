import { AnimationControls, motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   animationControls: AnimationControls;
};

export default function FilterContainer({
   children,
   animationControls,
}: Props) {
   return (
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 pointer-events-none ">
         <motion.div
            drag={true}
            dragMomentum={false}
            initial={{ width: 10, height: 5, opacity: 0 }}
            animate={animationControls}
            className="pointer-events-auto bg-black text-white border border-white overflow-hidden"
         >
            <div className="w-[calc(100vw-40px)] sm:w-[540px] md:w-[610px] flex-shrink-0 ">
               {children}
            </div>
         </motion.div>
      </div>
   );
}
