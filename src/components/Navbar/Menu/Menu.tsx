import useLanguageContext from "@/context/LanguageContext";
import MenuContainer from "./MenuContainer";
import MenuFooter from "./MenuFooter";
import MenuOption from "./MenuOption";
import MenuOptionsContainer from "./MenuOptionsContainer";
import MenuTitle from "./MenuTitle";
import { useRouter } from "next/router";

interface Props {
   isMenuOpen: boolean;
   closeMenu: () => void;
}

export default function Menu({ isMenuOpen, closeMenu }: Props) {
   const router = useRouter();
   const scrollTo = (id: string) => {
      const element = document.getElementById(id);
      if (router.route === "/") element?.scrollIntoView({ behavior: "smooth" });
      else router.push("/#" + id);
   };

   const scrollToAboutMobile = () => scrollTo("about");
   const scrollToSkills = () => scrollTo("skills");
   const scrollToProjects = () => scrollTo("projects");
   const scrollToContact = () => scrollTo("contact");
   const { currentLanguage } = useLanguageContext();
   const { about, skills, projects, contact } = currentLanguage.navbar;
   return (
      <MenuContainer isMenuOpen={isMenuOpen}>
         <MenuOptionsContainer>
            <MenuTitle />
            <MenuOption onClick={scrollToAboutMobile} closeMenu={closeMenu}>
               {about}
            </MenuOption>
            <MenuOption onClick={scrollToSkills} closeMenu={closeMenu}>
               {skills}
            </MenuOption>
            <MenuOption onClick={scrollToProjects} closeMenu={closeMenu}>
               {projects}
            </MenuOption>
            <MenuOption onClick={scrollToContact} closeMenu={closeMenu}>
               {contact}
            </MenuOption>
         </MenuOptionsContainer>
         <MenuFooter />
      </MenuContainer>
   );
}
