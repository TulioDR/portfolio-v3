import MainContainer from "@/components/MainContainer";
import SectionTitle from "../SectionTitle";
import ContactInfo from "./ContactInfo";
import ContactInput from "./ContactInput";
import SendButton from "./SendButton";

export default function ContactSection() {
   return (
      <div className="w-full py-24">
         <MainContainer>
            <SectionTitle>Contact Me</SectionTitle>
            <div className="mx-auto w-full md:w-min mt-20 md:mt-7 md:pl-36">
               <div className="w-full md:w-max md:flex md:space-x-7 py-7 pr-7 pl-7 md:pl-0 bg-white shadow-2xl">
                  <ContactInfo />
                  <div className="mt-7 space-y-6 w-full sm:w-96">
                     <h4 className="text-xl font-medium">Send a Message</h4>
                     <div className="grid gap-6 grid-cols-1 sm:grid-cols-2">
                        <ContactInput placeholder="First Name" />
                        <ContactInput placeholder="Last Name" />
                        <ContactInput placeholder="Email" />
                        <ContactInput placeholder="Phone Number (optional)" />
                     </div>
                     <div className="w-full relative h-28">
                        <textarea
                           placeholder="Write your message here"
                           className="w-full h-full outline-none text-sm"
                        />
                        <div className="w-full absolute bottom-0 h-1 bg-slate-800"></div>
                     </div>
                     <SendButton />
                  </div>
               </div>
            </div>
         </MainContainer>
      </div>
   );
}
