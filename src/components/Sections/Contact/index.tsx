import MainContainer from "@/components/MainContainer";
import Logo from "@/components/Navbar/NavLogo";
import useNavbarContext from "@/context/NavbarContext";
import ContactForm from "./ContactForm";
import Footer from "./Footer";

export default function ContactSection() {
   const { contactRef } = useNavbarContext();
   return (
      <div
         ref={contactRef}
         className="w-full py-24 bg-[#161b21] text-white 2xl:h-screen"
      >
         <MainContainer>
            <div className="flex flex-col h-full">
               <div className="text-white flex">
                  <Logo isMenuOpen />
               </div>
               <div className="grid lg:grid-cols-2 gap-7 lg:gap-0 my-24 2xl:my-auto">
                  <div className="grid sm:grid-cols-2 gap-7 sm:gap-0 text-sm sm:text-base md:text-lg font-semibold">
                     <div className="space-y-5 hidden sm:block">
                        <div>Home</div>
                        <div>About me</div>
                        <div>Skills</div>
                        <div>Projects</div>
                     </div>
                     <div className="space-y-5">
                        <div className="font-bold underline">
                           Contact me at:
                        </div>
                        <div>tulioruzo29@gmail.com</div>
                        <div>Github</div>
                        <div>Linkedin</div>
                     </div>
                  </div>
                  <ContactForm />
               </div>
               <Footer />
            </div>
         </MainContainer>
      </div>
   );
}
