import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import MainContainer from "../MainContainer";
import Hamburger from "./Hamburger";
import Menu from "./Menu/Menu";
import TranslateBtn from "./TranslateBtn";

export default function Navbar() {
   // cubic-bezier(1,0,0,1)
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
   const closeMenu = () => setIsMenuOpen(false);

   return (
      <>
         <div className="fixed top-0 w-full z-20">
            <MainContainer>
               <div className="flex justify-between items-center h-20 text-lg font-semibold">
                  <div>Tulio Ruzo</div>
                  <div className="flex space-x-7 items-center">
                     <TranslateBtn />
                     <Hamburger
                        isMenuOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                     />
                  </div>
               </div>
            </MainContainer>
         </div>
         <AnimatePresence>
            {isMenuOpen && (
               <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            )}
         </AnimatePresence>
      </>
   );
}
