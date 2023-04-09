import MainContainer from "@/components/MainContainer";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";
import SectionTitle from "../SectionTitle";
import useLanguageContext from "@/context/LanguageContext";
import { useRef } from "react";

interface Props {
   contactRef: React.RefObject<HTMLDivElement>;
}

export default function ContactSection({ contactRef }: Props) {
   const { currentLanguage } = useLanguageContext();
   const { title } = currentLanguage.contact;

   const nameInputRef = useRef<HTMLInputElement>(null);
   return (
      <div
         id="contact"
         ref={contactRef}
         className="w-full py-24 bg-[#161b21] text-white 2xl:h-screen"
      >
         <MainContainer>
            <div className="flex flex-col h-full">
               <SectionTitle>{title}</SectionTitle>
               <div className="sm:text-lg w-max mt-7 ml-2 hover:underline decoration-main-orange">
                  tulioruzo29@gmail.com
               </div>
               <div className="grid lg:grid-cols-2 gap-7 lg:gap-0 mt-24 2xl:my-auto">
                  <ContactInfo nameInputRef={nameInputRef} />
                  <ContactForm nameInputRef={nameInputRef} />
               </div>
            </div>
         </MainContainer>
      </div>
   );
}
