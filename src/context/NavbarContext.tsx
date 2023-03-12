import { useInView } from "framer-motion";
import { useRouter } from "next/router";
import {
   createContext,
   useContext,
   useEffect,
   useState,
   useRef,
   RefObject,
} from "react";

interface NavbarContextInterface {
   isWhite: boolean;
   aboutRef: RefObject<HTMLDivElement>;
   skillsRef: RefObject<HTMLDivElement>;
   projectsRef: RefObject<HTMLDivElement>;
   contactRef: RefObject<HTMLDivElement>;
   aboutInfoRef: RefObject<HTMLDivElement>;
   projectsSliderRef: RefObject<HTMLDivElement>;
   scrollToAboutInfo: () => void;
   scrollToSkills: () => void;
   scrollToProjectsSlider: () => void;
   scrollToContact: () => void;
}

const NavbarContext = createContext({} as NavbarContextInterface);
export default function useNavbarContext() {
   return useContext(NavbarContext);
}

interface Props {
   children: React.ReactNode;
}
export function NavbarContextProvider({ children }: Props) {
   const [isWhite, setIsWhite] = useState<boolean>(true);

   const setBlack = () => setIsWhite(false);
   const setWhite = () => setIsWhite(true);

   const aboutRef = useRef<HTMLDivElement>(null);
   const aboutInView = useInView(aboutRef, { margin: "0% 0% -95% 0%" });

   const aboutInfoRef = useRef<HTMLDivElement>(null);

   const skillsRef = useRef<HTMLDivElement>(null);
   const skillsInView = useInView(skillsRef, { margin: "0% 0% -95% 0%" });

   const projectsRef = useRef<HTMLDivElement>(null);
   const projectsInView = useInView(projectsRef, { margin: "0% 0% -95% 0%" });

   const projectsSliderRef = useRef<HTMLDivElement>(null);

   const contactRef = useRef<HTMLDivElement>(null);
   const contactInView = useInView(contactRef, { margin: "0% 0% -95% 0%" });

   useEffect(() => {
      if (contactInView) setWhite();
      else if (projectsInView) setWhite();
      else if (skillsInView) setBlack();
      else if (aboutInView) setWhite();
      else setWhite();
   }, [contactInView, projectsInView, skillsInView, aboutInView]);

   const { asPath } = useRouter();
   useEffect(() => {
      const scrollTo = (el: RefObject<HTMLDivElement>) => {
         el.current?.scrollIntoView();
      };
      if (asPath === "/#about") scrollTo(aboutInfoRef);
      else if (asPath === "/#skills") scrollTo(skillsRef);
      else if (asPath === "/#projects") scrollTo(projectsSliderRef);
      else if (asPath === "/#contact") scrollTo(contactRef);
   }, []);

   const scrollTo = (el: RefObject<HTMLDivElement>) => {
      el.current?.scrollIntoView({ behavior: "smooth" });
   };

   const scrollToAboutInfo = () => scrollTo(aboutInfoRef);
   const scrollToSkills = () => scrollTo(skillsRef);
   const scrollToProjectsSlider = () => scrollTo(projectsSliderRef);
   const scrollToContact = () => scrollTo(contactRef);

   const value: NavbarContextInterface = {
      isWhite,
      aboutRef,
      skillsRef,
      projectsRef,
      contactRef,
      aboutInfoRef,
      projectsSliderRef,
      scrollToAboutInfo,
      scrollToSkills,
      scrollToProjectsSlider,
      scrollToContact,
   };

   return (
      <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
   );
}
