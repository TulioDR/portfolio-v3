type Props = {
   children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
   return (
      <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl font-semibold">
         {children}
      </h1>
   );
}
