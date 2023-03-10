import { useInView } from "framer-motion";
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
}

const NavbarContext = createContext({} as NavbarContextInterface);
export default function useNavbarContext() {
   return useContext(NavbarContext);
}

interface Props {
   children: React.ReactNode;
}
export function NavbarContextProvider({ children }: Props) {
   const [isWhite, setIsWhite] = useState<boolean>(false);

   const setBlack = () => setIsWhite(false);
   const setWhite = () => setIsWhite(true);

   const aboutRef = useRef<HTMLDivElement>(null);
   const aboutInView = useInView(aboutRef, { margin: "0% 0% -95% 0%" });

   const skillsRef = useRef<HTMLDivElement>(null);
   const skillsInView = useInView(skillsRef, { margin: "0% 0% -95% 0%" });

   const projectsRef = useRef<HTMLDivElement>(null);
   const projectsInView = useInView(projectsRef, { margin: "0% 0% -95% 0%" });

   const contactRef = useRef<HTMLDivElement>(null);
   const contactInView = useInView(contactRef, { margin: "0% 0% -95% 0%" });

   useEffect(() => {
      if (contactInView) {
         console.log("contact in view");
         setWhite();
      } else if (projectsInView) {
         console.log("projects in view");
         setWhite();
      } else if (skillsInView) {
         console.log("skills in view");
         setBlack();
      } else if (aboutInView) {
         console.log("about in view");
         setBlack();
      } else {
         console.log("home in view");
         setBlack();
      }
   }, [contactInView, projectsInView, skillsInView, aboutInView]);

   const value: NavbarContextInterface = {
      isWhite,
      aboutRef,
      skillsRef,
      projectsRef,
      contactRef,
   };

   return (
      <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
   );
}
