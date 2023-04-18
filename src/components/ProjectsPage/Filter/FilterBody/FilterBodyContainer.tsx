import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   onAnimationComplete: (definition: any) => void;
};

export default function FilterBodyContainer({
   children,
   onAnimationComplete,
}: Props) {
   return (
      <motion.div
         initial={{ height: 0 }}
         animate={{ height: 300 }}
         exit={{ height: 0 }}
         transition={{ duration: 0.4 }}
         onAnimationComplete={(definition) => onAnimationComplete(definition)}
         className="absolute -z-10 top-full w-full bg-main-primary cursor-default rounded-b-lg overflow-hidden"
      >
         <div className="px-3 pb-3 w-full h-full flex-shrink-0">
            <div
               onPointerDownCapture={(e) => e.stopPropagation()}
               className="bg-main-white w-full rounded-lg h-full overflow-hidden"
            >
               <div className="w-full h-[288px] overflow-y-scroll py-3 pl-3 pr-1">
                  {children}
               </div>
            </div>
         </div>
      </motion.div>
   );
}
