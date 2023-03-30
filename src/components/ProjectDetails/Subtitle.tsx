import { useInView } from "framer-motion";
import { useRef } from "react";

type Props = {
   children: React.ReactNode;
};

export default function Subtitle({ children }: Props) {
   const ref = useRef(null);
   const isInView = useInView(ref, { once: true });

   return (
      <div
         ref={ref}
         className="flex items-center justify-center text-gray-800 space-x-2 sm:space-x-4"
      >
         <div
            className={`h-1 rounded-full bg-secondary duration-500 ${
               isInView ? "w-[4.66rem] md:w-[6.5rem]" : "w-0"
            }`}
         ></div>
         <div className="text-2xl sm:text-5xl text-center">{children}</div>
         <div
            className={`h-1 rounded-full bg-secondary duration-500 ${
               isInView ? "w-[4.66rem] md:w-[6.5rem]" : "w-0"
            }`}
         ></div>
      </div>
   );
}
