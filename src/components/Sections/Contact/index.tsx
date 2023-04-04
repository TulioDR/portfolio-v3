import MainContainer from "@/components/MainContainer";
import useNavbarContext from "@/context/NavbarContext";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
import Footer from "./Footer";
import SectionTitle from "../SectionTitle";
import useLanguageContext from "@/context/LanguageContext";
import { useRef } from "react";

export default function ContactSection() {
   const { contactRef } = useNavbarContext();
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
               <div className="grid lg:grid-cols-2 gap-7 lg:gap-0 my-24 2xl:my-auto">
                  <ContactInfo nameInputRef={nameInputRef} />
                  <ContactForm nameInputRef={nameInputRef} />
               </div>
               <Footer />
            </div>
         </MainContainer>
      </div>
   );
}
