import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import MainContainer from "../MainContainer";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Menu from "./Menu/Menu";
import TranslateBtn from "./TranslateBtn";

export default function Navbar() {
   // cubic-bezier(1,0,0,1)
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
   const closeMenu = () => setIsMenuOpen(false);

   const router = useRouter();
   const onClick = () => {
      router.push("/#projects");
   };
   return (
      <>
         <div className="fixed top-0 w-full z-20">
            <MainContainer>
               <div className="flex justify-between items-center h-20 text-lg font-semibold">
                  <div onClick={onClick} className="w-1/3">
                     Tulio Ruzo
                  </div>
                  <Logo />
                  <div className="flex space-x-7 items-center justify-end w-1/3">
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
