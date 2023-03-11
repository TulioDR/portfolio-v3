import { useState } from "react";
import Hamburger from "./Hamburger";
import NavLogo from "./NavLogo";
import Menu from "./Menu/Menu";
import NavbarContainer from "./NavbarContainer";
import NavLink from "./NavLink";

export default function Navbar() {
   // cubic-bezier(1,0,0,1)
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
   return (
      <>
         <NavbarContainer>
            <div className="hidden md:flex space-x-7 items-center w-1/3">
               <NavLink outline>About me</NavLink>
               <NavLink simple>Skills</NavLink>
            </div>
            <NavLogo />
            <div className="hidden md:flex space-x-7 items-center justify-end w-1/3">
               <NavLink simple>Projects</NavLink>
               <NavLink>Contact me</NavLink>
            </div>
            <div className="md:hidden">
               <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
         </NavbarContainer>
         <Menu isMenuOpen={isMenuOpen} />
      </>
   );
}
