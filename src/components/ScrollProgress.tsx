// import useScrollContext from "@/context/ScrollContext";
// import { motion, useTransform } from "framer-motion";

type Props = {
   black?: true;
};

export default function ScrollProgress({}: Props) {
   // const { springMotion, scrolledValue } = useScrollContext();
   // const top = useTransform(springMotion, [0, 1], ["0%", "100%"]);

   return (
      <div className="fixed right-0 top-0 w-20 h-screen z-10 flex items-center pointer-events-none">
         <div className="h-1/3 w-full relative">
            {/* <motion.div
               style={{ top }}
               className={`absolute right-0 -translate-x-1 w-max text-sm ${
                  black ? "text-black" : "text-white"
               } `}
            >
               {scrolledValue}%
            </motion.div> */}
         </div>
      </div>
   );
}
