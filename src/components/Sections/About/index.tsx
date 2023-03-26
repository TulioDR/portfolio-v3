import useNavbarContext from "@/context/NavbarContext";
import AboutDescription from "./AboutDescription";
import AboutSectionDesktop from "./desktop";
import AboutSectionMobile from "./mobile";

export default function AboutSection() {
   const { aboutRef } = useNavbarContext();

   return (
      <div ref={aboutRef} id="about">
         <AboutSectionDesktop />
         <AboutSectionMobile />
         <AboutDescription />
      </div>
   );
}
