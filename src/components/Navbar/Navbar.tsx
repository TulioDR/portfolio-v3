import { useState } from "react";
import Hamburger from "./Hamburger";
import NavLogo from "./NavLogo";
import Menu from "./Menu/Menu";
import NavbarContainer from "./NavbarContainer";
import NavLink from "./NavLink";
import useNavbarContext from "@/context/NavbarContext";

export default function Navbar() {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
   const closeMenu = () => setIsMenuOpen(false);

   const {
      scrollToAboutDesktop,
      scrollToAboutMobile,
      scrollToSkills,
      scrollToProjects,
      scrollToContact,
   } = useNavbarContext();

   return (
      <>
         <NavbarContainer isMenuOpen={isMenuOpen}>
            <div className="hidden md:flex space-x-7 items-center w-1/3">
               <div>
                  <div className="lg:hidden">
                     <NavLink onClick={scrollToAboutMobile} outline>
                        About me
                     </NavLink>
                  </div>
                  <div className="hidden lg:block">
                     <NavLink onClick={scrollToAboutDesktop} outline>
                        About me
                     </NavLink>
                  </div>
               </div>
               <NavLink onClick={scrollToSkills} simple>
                  Skills
               </NavLink>
            </div>
            <NavLogo isMenuOpen={isMenuOpen} />
            <div className="hidden md:flex space-x-7 items-center justify-end w-1/3">
               <NavLink onClick={scrollToProjects} simple>
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
