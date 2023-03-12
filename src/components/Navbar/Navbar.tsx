import { useState } from "react";
import Hamburger from "./Hamburger";
import NavLogo from "./NavLogo";
import Menu from "./Menu/Menu";
import NavbarContainer from "./NavbarContainer";
import NavLink from "./NavLink";
import useNavbarContext from "@/context/NavbarContext";

export default function Navbar() {
   // cubic-bezier(1,0,0,1)
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
   const closeMenu = () => setIsMenuOpen(false);

   const {
      scrollToAboutInfo,
      scrollToSkills,
      scrollToProjectsSlider,
      scrollToContact,
   } = useNavbarContext();

   return (
      <>
         <NavbarContainer isMenuOpen={isMenuOpen}>
            <div className="hidden md:flex space-x-7 items-center w-1/3">
               <NavLink onClick={scrollToAboutInfo} outline>
                  About me
               </NavLink>
               <NavLink onClick={scrollToSkills} simple>
                  Skills
               </NavLink>
            </div>
            <NavLogo isMenuOpen={isMenuOpen} />
            <div className="hidden md:flex space-x-7 items-center justify-end w-1/3">
               <NavLink onClick={scrollToProjectsSlider} simple>
                  Projects
               </NavLink>
               <NavLink onClick={scrollToContact}>Contact me</NavLink>
            </div>
            <div className="md:hidden">
               <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
         </NavbarContainer>
         <Menu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      </>
   );
}
