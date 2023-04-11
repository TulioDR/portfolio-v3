import useLanguageContext from "@/context/LanguageContext";
import SectionTitle from "../Sections/SectionTitle";
import RevealToRight from "@/animations/RevealToRight";

export default function ProjectsPageTitle() {
   const { currentLanguage } = useLanguageContext();
   const { title } = currentLanguage.projects;
   return (
      <RevealToRight main>
         <SectionTitle>{title}</SectionTitle>
      </RevealToRight>
   );
}
