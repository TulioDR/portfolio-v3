type Props = {
   icon: string;
   sharp?: boolean;
   layout: "normal" | "grid" | "list";
   currentLayout: "normal" | "grid" | "list";
   setCurrentLayout: React.Dispatch<
      React.SetStateAction<"normal" | "grid" | "list">
   >;
};

export default function LayoutButton({
   icon,
   sharp,
   layout,
   currentLayout,
   setCurrentLayout,
}: Props) {
   const handleClick = () => setCurrentLayout(layout);
   return (
      <button
         onClick={handleClick}
         className={`rounded-lg aspect-square w-10 flex-shrink-0 grid place-content-center ${
            currentLayout === layout
               ? "bg-main-primary text-white"
               : "bg-white hover:bg-main-primary hover:text-white"
         }`}
      >
         <span className={`material-icons${sharp ? "-sharp" : ""}`}>
            {icon}
         </span>
      </button>
   );
}
