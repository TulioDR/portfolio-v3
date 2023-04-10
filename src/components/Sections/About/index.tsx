import AboutDescription from "./AboutDescription";
import AboutSectionDesktop from "./desktop";
import AboutSectionMobile from "./mobile";

interface Props {
   aboutRef: React.RefObject<HTMLDivElement>;
   aboutInfoRef: React.RefObject<HTMLDivElement>;
}
export default function AboutSection({ aboutRef, aboutInfoRef }: Props) {
   return (
      <div ref={aboutRef} id="about">
         <div className="hidden lg:block">
            <AboutSectionDesktop aboutInfoRef={aboutInfoRef} />
         </div>
         <div className="lg:hidden">
            <AboutSectionMobile />
         </div>
         <AboutDescription />
      </div>
   );
}
