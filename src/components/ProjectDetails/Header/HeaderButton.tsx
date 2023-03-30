import RevealToTop from "@/animations/RevealToTop";

interface Props {
   children: React.ReactNode;
   alternative?: boolean;
   href: string;
}

export default function HeaderButton({ children, alternative, href }: Props) {
   return (
      <div className="overflow-hidden md:hover:-translate-y-1 duration-300">
         <RevealToTop reverse={alternative}>
            <a
               href={href}
               target="_blank"
               className={`bg-orange-700 w-max px-10 h-11 md:h-12 flex items-center cursor-pointer ${
                  alternative ? "rounded-xl" : "rounded-full"
               }`}
            >
               <span className="text-sm sm:text-base md:text-lg">
                  {children}
               </span>
            </a>
         </RevealToTop>
      </div>
   );
}
