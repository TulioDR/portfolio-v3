import useNavbarContext from "@/context/NavbarContext";
import { motion, useAnimationControls } from "framer-motion";
import MainContainer from "../MainContainer";
import { useEffect } from "react";
import useInitialLoadingContext from "@/context/InitialLoadingContext";

type Props = {
   children: React.ReactNode;
   isMenuOpen: boolean;
   black?: true;
};

export default function NavbarContainer({
   children,
   isMenuOpen,
   black,
}: Props) {
   const { isFullyLoaded } = useInitialLoadingContext();
   const showNavbar = useAnimationControls();

   useEffect(() => {
      if (!isFullyLoaded) return;
      showNavbar.start({
         y: 0,
         transition: { duration: 1, delay: 0.5, ease: "easeInOut" },
      });
   }, [isFullyLoaded, showNavbar]);
   return (
      <div className="fixed top-0 w-full pointer-events-none z-10">
         <div className={`w-full ${black ? "text-black" : "text-white"}`}>
            <MainContainer>
               <div className="flex justify-between items-center h-20 font-semibold">
                  {children}
               </div>
            </MainContainer>
         </div>
      </div>
   );
}
