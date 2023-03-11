import { AnimatePresence } from "framer-motion";
import { useState } from "react";
import Hamburger from "./Hamburger";
import Logo from "./Logo";
import Menu from "./Menu/Menu";
import NavbarContainer from "./NavbarContainer";
import NavLink from "./NavLink";

export default function Navbar() {
   // cubic-bezier(1,0,0,1)
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
   const closeMenu = () => setIsMenuOpen(false);
   return (
      <>
         <NavbarContainer>
            <div className="flex justify-between items-center h-20 font-semibold">
               <div className="flex space-x-7 items-center w-1/3">
                  <NavLink outline>About me</NavLink>
                  <NavLink simple>Skills</NavLink>
               </div>
               <Logo />
               <div className="flex space-x-7 items-center justify-end w-1/3">
                  <NavLink simple>Projects</NavLink>
                  <NavLink>Contact me</NavLink>
               </div>
            </div>
            {/* <Hamburger
                  isMenuOpen={isMenuOpen}
                  toggleMenu={toggleMenu}
               /> */}
         </NavbarContainer>
         <AnimatePresence>
            {isMenuOpen && (
               <Menu isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            )}
         </AnimatePresence>
      </>
   );
}
