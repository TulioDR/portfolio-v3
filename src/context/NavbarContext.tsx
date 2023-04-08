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
   scrollToAboutDesktop: () => void;
   scrollToAboutMobile: () => void;
   scrollToSkills: () => void;
   scrollToProjects: () => void;
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

   const router = useRouter();
   const { route } = router;

   useEffect(() => {
      console.log(route);
      if (route === "/projects") {
         setBlack();
         return;
      }
      if (route === "/projects/[project]") {
         if (projectsInView) setBlack();
         else setWhite();
         return;
      }
      if (contactInView) setWhite();
      else if (projectsInView) setWhite();
      else if (skillsInView) setBlack();
      else if (aboutInView) setWhite();
      else setWhite();
   }, [contactInView, projectsInView, skillsInView, aboutInView, route]);

   const scrollTo = (el: RefObject<HTMLDivElement>, id: string) => {
      if (route === "/") el.current?.scrollIntoView({ behavior: "smooth" });
      else router.push(id);
   };
   const scrollToAboutDesktop = () => scrollTo(aboutInfoRef, "/#about");
   const scrollToAboutMobile = () => scrollTo(aboutRef, "/#about");
   const scrollToSkills = () => scrollTo(skillsRef, "/#skills");
   const scrollToProjects = () => scrollTo(projectsSliderRef, "/#projects");
   const scrollToContact = () => scrollTo(contactRef, "/#contact");

   // useEffect(() => {
   //    const scrollTo = (el: RefObject<HTMLDivElement>) => {
   //       el.current?.scrollIntoView();
   //    };
   //    if (asPath === "/#about") scrollTo(aboutInfoRef);
   //    else if (asPath === "/#skills") scrollTo(skillsRef);
   //    else if (asPath === "/#projects") scrollTo(projectsSliderRef);
   //    else if (asPath === "/#contact") scrollTo(contactRef);
   // }, [asPath]);

   const value: NavbarContextInterface = {
      isWhite,
      aboutRef,
      skillsRef,
      projectsRef,
      contactRef,
      aboutInfoRef,
      projectsSliderRef,
      scrollToAboutDesktop,
      scrollToAboutMobile,
      scrollToSkills,
      scrollToProjects,
      scrollToContact,
   };

   return (
      <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
   );
}
