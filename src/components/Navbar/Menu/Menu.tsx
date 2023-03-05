import MainContainer from "@/components/MainContainer";
import Hamburger from "../Hamburger";
import TranslateBtn from "../TranslateBtn";
import MenuContainer from "./MenuContainer";
import MenuFooter from "./MenuFooter";
import MenuOptionsContainer from "./MenuOptionsContainer";
import MenuTitle from "./MenuTitle";

interface Props {
   isMenuOpen: boolean;
   toggleMenu: () => void;
}

export default function Menu({ isMenuOpen, toggleMenu }: Props) {
   return (
      <MenuContainer>
         <div className="w-full">
            <MainContainer>
               <div className="flex justify-between items-center h-20 text-lg font-semibold text-white">
                  <div>Tulio Ruzo</div>
                  <div className="flex space-x-7 items-center">
                     <TranslateBtn />
                     <Hamburger
                        isMenuOpen={isMenuOpen}
                        toggleMenu={toggleMenu}
                     />
                  </div>
               </div>
            </MainContainer>
         </div>
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
