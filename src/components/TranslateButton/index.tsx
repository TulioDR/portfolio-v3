import TranslateButtonContainer from "./TranslateButtonContainer";
import TranslateButtonDesktop from "./desktop";
import TranslateButtonMobile from "./mobile";

export default function TranslateButton() {
   return (
      <TranslateButtonContainer>
         <div className="hidden md:block pointer-events-auto">
            <TranslateButtonDesktop />
         </div>
         <div className="md:hidden pointer-events-auto">
            <TranslateButtonMobile />
         </div>
      </TranslateButtonContainer>
   );
}
