type Props = {
   children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
   return (
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-8xl xl:text-9xl font-medium">
         {children}
      </h1>
   );
}
