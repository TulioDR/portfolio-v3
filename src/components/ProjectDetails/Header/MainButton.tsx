// import RevealToTop from "../../animations/RevealToTop";

import RevealToTop from "@/animations/RevealToTop";

type Props = {
   children: React.ReactNode;
   mobile?: boolean;
   onClick: any;
};

export default function MainButton({ children, mobile, onClick }: Props) {
   return (
      <div
         className={`overflow-hidden md:hover:-translate-y-1 duration-300 ${
            mobile ? "sm:hidden" : "w-max"
         }`}
      >
         <RevealToTop>
            <button
               onClick={onClick}
               className={`bg-orange-700 rounded-full w-max px-10 h-11 md:h-12 flex items-center ${
                  mobile ? "mx-auto" : ""
               }`}
            >
               <span className="md:text-lg"> {children}</span>
            </button>
         </RevealToTop>
      </div>
   );
}
