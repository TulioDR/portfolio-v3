type Props = {
   children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
   return (
      <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-9xl font-medium">
         {children}
      </h1>
   );
}
