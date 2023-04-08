import useNavbarContext from "@/context/NavbarContext";
import { useInView } from "framer-motion";
import { useRouter } from "next/router";
import { useEffect, useRef } from "react";

export default function useScrollPosition() {
   const { setWhite, setBlack } = useNavbarContext();

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

   const { route } = useRouter();

   useEffect(() => {
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
   }, [contactInView, projectsInView, skillsInView, aboutInView]);

   return {
      aboutRef,
      aboutInfoRef,
      skillsRef,
      projectsRef,
      projectsSliderRef,
      contactRef,
   };
}
