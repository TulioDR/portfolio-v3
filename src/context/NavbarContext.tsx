import { useRouter } from "next/router";
import { createContext, useContext, useState } from "react";

interface NavbarContextInterface {
   isWhite: boolean;
   scrollToAboutDesktop: () => void;
   scrollToAboutMobile: () => void;
   scrollToSkills: () => void;
   scrollToProjects: () => void;
   scrollToContact: () => void;
   setBlack: () => void;
   setWhite: () => void;
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

   const router = useRouter();
   const { route } = router;

   const scrollTo = (id: string) => {
      const element = document.getElementById(id);
      if (route === "/") element?.scrollIntoView({ behavior: "smooth" });
      else router.push("/#" + id);
   };
   const scrollToAboutDesktop = () => scrollTo("about-info");
   const scrollToAboutMobile = () => scrollTo("about");
   const scrollToSkills = () => scrollTo("skills");
   const scrollToProjects = () => scrollTo("projects");
   const scrollToContact = () => scrollTo("contact");

   const value: NavbarContextInterface = {
      isWhite,
      scrollToAboutDesktop,
      scrollToAboutMobile,
      scrollToSkills,
      scrollToProjects,
      scrollToContact,
      setBlack,
      setWhite,
   };

   return (
      <NavbarContext.Provider value={value}>{children}</NavbarContext.Provider>
   );
}
