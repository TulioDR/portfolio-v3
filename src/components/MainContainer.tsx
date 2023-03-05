type Props = {
   children: React.ReactNode;
};

export default function MainContainer({ children }: Props) {
   return (
      <div className="mx-auto w-full h-full px-5 sm:px-0 sm:w-[540px] md:w-[720px] lg:w-[960px] xl:w-[1140px] 2xl:[1320px]">
         {children}
      </div>
   );
}
