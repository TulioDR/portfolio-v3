import MainContainer from "@/components/MainContainer";
import Logo from "@/components/Navbar/NavLogo";
import useNavbarContext from "@/context/NavbarContext";
import ContactForm from "./ContactForm/ContactForm";
import ContactInfo from "./ContactInfo/ContactInfo";
import Footer from "./Footer";

export default function ContactSection() {
   const { contactRef } = useNavbarContext();
   return (
      <div
         id="contact"
         ref={contactRef}
         className="w-full py-24 bg-[#161b21] text-white 2xl:h-screen"
      >
         <MainContainer>
            <div className="flex flex-col h-full">
               <div className="text-white flex">
                  <Logo isMenuOpen />
               </div>
               <div className="grid lg:grid-cols-2 gap-7 lg:gap-0 my-24 2xl:my-auto">
                  <ContactInfo />
                  <ContactForm />
               </div>
               <Footer />
            </div>
         </MainContainer>
      </div>
   );
}
