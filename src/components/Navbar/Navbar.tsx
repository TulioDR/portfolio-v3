import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/router";
import { useState } from "react";
import MainContainer from "../MainContainer";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Menu from "./Menu/Menu";

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
               <div className="flex justify-between items-center h-20 font-semibold">
                  <div className="flex space-x-7 items-center w-1/3">
                     <button className="rounded-full border border-orange-700 w-28 h-10">
                        About me
                     </button>
                     <button>Skills</button>
                  </div>
                  <Logo />
                  <div className="flex space-x-7 items-center justify-end w-1/3">
                     <button>Projects</button>
                     <button className="rounded-full bg-orange-700 w-28 h-10 text-white">
                        Contact me
                     </button>
                  </div>
               </div>
               {/* <Hamburger
                        isMenuOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                     /> */}
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
