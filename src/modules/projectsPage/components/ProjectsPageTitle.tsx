import useLanguageContext from "@/context/LanguageContext";

import RevealToRight from "@/animations/RevealToRight";
import SectionTitle from "@/components/Sections/SectionTitle";

export default function ProjectsPageTitle() {
   const { currentLanguage } = useLanguageContext();
   const { title } = currentLanguage.projects;
   return (
      <RevealToRight main>
         <SectionTitle>{title}</SectionTitle>
      </RevealToRight>
   );
}
