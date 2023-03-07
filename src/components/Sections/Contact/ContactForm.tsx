import ContactInput from "./ContactInput";
import SendButton from "./SendButton";

export default function ContactForm() {
   return (
      <div className="w-full space-y-5">
         <h4 className="text-lg font-bold">Send a Message</h4>
         <div className="grid gap-5 grid-cols-1 sm:grid-cols-2">
            <ContactInput placeholder="First Name" />
            <ContactInput placeholder="Last Name" />
            <ContactInput placeholder="Email" />
            <ContactInput placeholder="Phone Number (optional)" />
         </div>
         <div className="w-full relative h-32">
            <textarea
               placeholder="Write your message here"
               className="w-full h-full outline-none text-sm px-5 py-3 text-black rounded-xl"
            />
         </div>
         <SendButton />
      </div>
   );
}
