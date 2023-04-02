import useLanguageContext from "@/context/LanguageContext";
import useNavbarContext from "@/context/NavbarContext";
import MenuContainer from "./MenuContainer";
import MenuFooter from "./MenuFooter";
import MenuOption from "./MenuOption";
import MenuOptionsContainer from "./MenuOptionsContainer";
import MenuTitle from "./MenuTitle";

interface Props {
   isMenuOpen: boolean;
   closeMenu: () => void;
}

export default function Menu({ isMenuOpen, closeMenu }: Props) {
   const {
      scrollToAboutMobile,
      scrollToSkills,
      scrollToProjects,
      scrollToContact,
   } = useNavbarContext();

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
