import { MotionValue, motion, useTransform } from "framer-motion";
type Props = {
   scroll: MotionValue<number>;
};

export default function AboutDescription({ scroll }: Props) {
   const y = useTransform(scroll, [0, 1], ["0%", "-50%"]);

   return (
      <motion.div style={{ y }} className="flex flex-col h-[200vh] w-3/4 p-20">
         <div className="w-full h-full pr-10">
            <div className="w-full h-full grid grid-cols-2 gap-10">
               <div className="w-full rounded-3xl bg-gradient-to-r from-[#8c1a56] to-[#fc9a74] row-span-2"></div>
               <div className="w-full rounded-3xl bg-gradient-to-r from-[#103CE7] to-[#64E9FF]"></div>
               <div className="w-full rounded-3xl bg-gradient-to-r from-[#061700] to-[#52c234] row-span-2"></div>
               <div className="w-full rounded-3xl bg-gradient-to-r from-[#103CE7] to-[#64E9FF]"></div>
            </div>
         </div>
         {/* <AboutTitle scrollYProgress={scrollYProgress} /> */}
      </motion.div>
   );
}
