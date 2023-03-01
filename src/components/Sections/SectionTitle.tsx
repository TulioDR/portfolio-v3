type Props = {
   children: React.ReactNode;
};

export default function SectionTitle({ children }: Props) {
   return <h1 className="text-8xl">{children}</h1>;
}
