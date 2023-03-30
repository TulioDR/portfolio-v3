import { motion } from "framer-motion";
import { useRouter } from "next/router";
import MainContainer from "../MainContainer";

type SvgProps = {
   isWhiteArrow: boolean;
};
const SvgComponent = ({ isWhiteArrow }: SvgProps) => (
   <svg xmlns="http://www.w3.org/2000/svg" height={34} viewBox="0 0 67 34">
      <g
         fill="none"
         fillRule="evenodd"
         stroke={isWhiteArrow ? "#000" : "#FFF"}
         strokeLinecap="round"
         strokeWidth={2}
      >
         <path d="M2 16.553h64M17.556 1 2 16.556l15.556 15.555" />
      </g>
   </svg>
);

export default function TopBackButton() {
   // const { isWhiteArrow } = useNavbarContext();

   const router = useRouter();
   const handleClick = () => {
      router.push("/projects");
   };
   const animation = {
      initial: { x: "100%" },
      animate: { x: 0, transition: { duration: 0.6 } },
      exit: { x: "-110%", transition: { duration: 0.6 } },
   };
   return (
      <div className="fixed w-full top-20 z-10 pointer-events-none">
         <MainContainer>
            <div className="overflow-hidden w-16 h-9 translate-y-3 duration-300 hover:-translate-x-2">
               <motion.button
                  variants={animation}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  onClick={handleClick}
                  className="w-full h-full relative pointer-events-auto"
               >
                  <SvgComponent isWhiteArrow={false} />
               </motion.button>
            </div>
         </MainContainer>
      </div>
   );
}
