type Props = {
   children: React.ReactNode;
};

export default function SkillCardsContainer({ children }: Props) {
   return (
      <div className="px-[14px] pb-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-7">
         {children}
      </div>
   );
}
