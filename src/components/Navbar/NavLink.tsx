type Props = {
   simple?: boolean;
   outline?: boolean;
   children: React.ReactNode;
};

export default function NavLink({ simple, outline, children }: Props) {
   return simple ? (
      <button>{children}</button>
   ) : (
      <button
         className={`w-28 h-10 rounded-full ${
            outline
               ? "border border-orange-700 hover:bg-orange-700"
               : "bg-orange-700 text-white"
         }`}
      >
         {children}
      </button>
   );
}
