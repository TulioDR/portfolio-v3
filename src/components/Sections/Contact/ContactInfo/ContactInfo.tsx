import useLanguageContext from "@/context/LanguageContext";
import Hexagon from "./Hexagon";

import gmailLogo from "@/assets/images/contact/gmail.png";
import githubLogo from "@/assets/images/contact/github.svg";
import linkedinLogo from "@/assets/images/contact/linkedin.svg";

interface Props {
   nameInputRef: React.RefObject<HTMLInputElement>;
}

export default function ContactInfo({ nameInputRef }: Props) {
   const { currentLanguage } = useLanguageContext();
   const { contactMeAt } = currentLanguage.contact;

   const openLink = (link: string) => window.open(link, "_blank");
   const gmailLink = "mailto:tulioruzo29@gmail.com";
   const linkedinLink = "https://www.linkedin.com/in/tulio-ruzo/";
   const githubLink = "https://github.com/TulioDR";

   const focusContactForm = () => nameInputRef.current!.focus();

   return (
      <div className="flex justify-center items-center">
         <div>
            <div className="flex space-x-4">
               <Hexagon>{contactMeAt}</Hexagon>
               <Hexagon src={gmailLogo} onClick={() => openLink(gmailLink)}>
                  Gmail
               </Hexagon>
               <Hexagon onClick={focusContactForm}>
                  <div>Send a message</div>
                  <span className="material-icons !rotate-90 lg:!rotate-0">
                     arrow_right_alt
                  </span>
               </Hexagon>
            </div>
            <div className="flex justify-center space-x-4 -translate-y-4">
               <Hexagon
                  src={linkedinLogo}
                  onClick={() => openLink(linkedinLink)}
               >
                  LinkedIn
               </Hexagon>
               <Hexagon src={githubLogo} onClick={() => openLink(githubLink)}>
                  Github
               </Hexagon>
            </div>
         </div>
      </div>
   );
}
