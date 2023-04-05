import useNavbarContext from "@/context/NavbarContext";
import { motion, useAnimationControls } from "framer-motion";
import MainContainer from "../MainContainer";
import { useEffect } from "react";
import useInitialLoadingContext from "@/context/InitialLoadingContext";

type Props = {
   children: React.ReactNode;
   isMenuOpen: boolean;
};

export default function NavbarContainer({ children, isMenuOpen }: Props) {
   const { isWhite } = useNavbarContext();
   const { isFullyLoaded } = useInitialLoadingContext();
   const showNavbar = useAnimationControls();

   useEffect(() => {
      if (!isFullyLoaded) return;
      showNavbar.start({
         y: 0,
         transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
      });
   }, [isFullyLoaded]);
   return (
      <motion.div
         initial={{ y: "-100%" }}
         animate={showNavbar}
         className="fixed top-0 w-full z-30"
      >
         <div
            className={`w-full duration-500 ${
               isWhite || isMenuOpen ? "text-white" : "text-black"
            }`}
         >
            <MainContainer>
               <div className="flex justify-between items-center h-20 font-semibold">
                  {children}
               </div>
            </MainContainer>
         </div>
      </motion.div>
   );
}
