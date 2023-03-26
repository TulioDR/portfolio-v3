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
   return (
      <MenuContainer isMenuOpen={isMenuOpen}>
         <MenuOptionsContainer>
            <MenuTitle />
            <MenuOption onClick={scrollToAboutMobile} closeMenu={closeMenu}>
               About me
            </MenuOption>
            <MenuOption onClick={scrollToSkills} closeMenu={closeMenu}>
               Skills
            </MenuOption>
            <MenuOption onClick={scrollToProjects} closeMenu={closeMenu}>
               Projects
            </MenuOption>
            <MenuOption onClick={scrollToContact} closeMenu={closeMenu}>
               Contact
            </MenuOption>
         </MenuOptionsContainer>
         <MenuFooter />
      </MenuContainer>
   );
}
