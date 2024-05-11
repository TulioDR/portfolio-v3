type Props = {
   children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
   return (
      <h1 className="font-black uppercase text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl">
         {children}
      </h1>
   );
}
