import { useState } from "react";
import Hamburger from "./Hamburger";
import NavLogo from "./NavLogo";
import Menu from "./Menu/Menu";
import NavbarContainer from "./NavbarContainer";
import NavLink from "./NavLink";
import useLanguageContext from "@/context/LanguageContext";
import { useRouter } from "next/router";

interface Props {
   lightBg?: true;
}

export default function Navbar({ lightBg }: Props) {
   const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false);
   const toggleMenu = () => setIsMenuOpen((prev) => !prev);
   const closeMenu = () => setIsMenuOpen(false);

   const router = useRouter();
   const scrollTo = (id: string) => {
      const element = document.getElementById(id);
      if (router.route === "/") element?.scrollIntoView({ behavior: "smooth" });
      else router.push("/#" + id);
   };
   const scrollToAboutDesktop = () => scrollTo("about-info");
   const scrollToAboutMobile = () => scrollTo("about");
   const scrollToSkills = () => scrollTo("skills");
   const scrollToProjects = () => scrollTo("projects");
   const scrollToContact = () => scrollTo("contact");

   const { currentLanguage } = useLanguageContext();
   const { about, skills, projects, contact } = currentLanguage.navbar;
   return (
      <>
         <NavbarContainer isMenuOpen={isMenuOpen} black={lightBg}>
            <div className="hidden md:flex space-x-7 items-center w-1/3">
               <div>
                  <div className="lg:hidden">
                     <NavLink onClick={scrollToAboutMobile} outline>
                        {about}
                     </NavLink>
                  </div>
                  <div className="hidden lg:block">
                     <NavLink onClick={scrollToAboutDesktop} outline>
                        {about}
                     </NavLink>
                  </div>
               </div>
               <NavLink onClick={scrollToSkills} simple>
                  {skills}
               </NavLink>
            </div>
            <NavLogo black={lightBg} />
            <div className="hidden md:flex space-x-7 items-center justify-end w-1/3">
               <NavLink onClick={scrollToProjects} simple>
                  {projects}
               </NavLink>
               <NavLink onClick={scrollToContact}>{contact}</NavLink>
            </div>
            <div className="md:hidden">
               <Hamburger isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
            </div>
         </NavbarContainer>
         <Menu isMenuOpen={isMenuOpen} closeMenu={closeMenu} />
      </>
   );
}
