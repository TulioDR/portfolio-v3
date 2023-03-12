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
      scrollToAboutInfo,
      scrollToSkills,
      scrollToProjectsSlider,
      scrollToContact,
   } = useNavbarContext();
   return (
      <MenuContainer isMenuOpen={isMenuOpen}>
         <MenuOptionsContainer>
            <MenuTitle />
            <MenuOption onClick={scrollToAboutInfo} closeMenu={closeMenu}>
               About me
            </MenuOption>
            <MenuOption onClick={scrollToSkills} closeMenu={closeMenu}>
               Skills
            </MenuOption>
            <MenuOption onClick={scrollToProjectsSlider} closeMenu={closeMenu}>
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
