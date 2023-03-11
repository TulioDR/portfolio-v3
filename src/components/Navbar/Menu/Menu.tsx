import MainContainer from "@/components/MainContainer";
import Hamburger from "../Hamburger";
import TranslateBtn from "../TranslateBtn";
import MenuContainer from "./MenuContainer";
import MenuFooter from "./MenuFooter";
import MenuOptionsContainer from "./MenuOptionsContainer";
import MenuTitle from "./MenuTitle";

interface Props {
   isMenuOpen: boolean;
}

export default function Menu({ isMenuOpen }: Props) {
   return (
      <MenuContainer isMenuOpen={isMenuOpen}>
         <MenuTitle />
         <MenuOptionsContainer>
            {/* <MenuOption link="home" index={0} bulletRef={homeBullet}>
               {home}
            </MenuOption>
            <MenuOption link="about" index={1} bulletRef={aboutBullet}>
               {about}
            </MenuOption>
            <MenuOption link="projects" index={2} bulletRef={projectsBullet}>
               {projects}
            </MenuOption>
            <MenuOption link="contact" index={3} bulletRef={contactBullet}>
               {contact}
            </MenuOption> */}
         </MenuOptionsContainer>
         <MenuFooter />
      </MenuContainer>
   );
}
