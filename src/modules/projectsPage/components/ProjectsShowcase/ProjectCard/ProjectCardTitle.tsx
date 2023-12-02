type Props = {
   children: React.ReactNode;
   isFinished: boolean;
};

export default function ProjectCardTitle({ children, isFinished }: Props) {
   return (
      <>
         <div className="absolute top-0 left-0 w-full h-full bg-black/60 pointer-events-none opacity-0 group-hover:opacity-100 duration-300"></div>
         <div
            style={{ transform: "translateZ(50px)" }}
            className="absolute top-0 left-0 w-full h-full flex items-center justify-center pointer-events-none opacity-0 group-hover:opacity-100 duration-300"
         >
            <div className="text-xs sm:text-sm md:text-xl lg:text-2xl text-center text-white font-semibold">
               <div>{children}</div>
               {!isFinished && <div>(Coming Soon)</div>}
            </div>
         </div>
      </>
   );
}
