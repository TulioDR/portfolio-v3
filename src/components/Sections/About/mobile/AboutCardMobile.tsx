import useLanguageContext from "@/context/LanguageContext";
import React from "react";
import ShieldLogo from "../ShieldLogo";

export default function AboutCardMobile() {
   const { currentLanguage } = useLanguageContext();
   const { card } = currentLanguage.about;
   return (
      <div className="w-full rounded-3xl bg-main-primary text-main-white font-semibold text-xl p-5 sm:p-10 md:p-14 mt-10">
         <div className="w-40">{card}</div>
         <ShieldLogo />
      </div>
   );
}
