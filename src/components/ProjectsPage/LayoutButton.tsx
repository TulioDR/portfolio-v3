import { LayoutModel } from "@/models/ProjectModel";

type Props = {
   icon: string;
   sharp?: boolean;
   layout: LayoutModel;
   currentLayout: LayoutModel;
   setCurrentLayout: React.Dispatch<React.SetStateAction<LayoutModel>>;
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
         className={`rounded-lg aspect-square w-10 grid place-content-center ${
            currentLayout === layout
               ? "bg-main-primary text-white"
               : "bg-white hover:bg-main-primary hover:bg-opacity-50 hover:text-white"
         }`}
      >
         <span className={`material-icons${sharp ? "-sharp" : ""}`}>
            {icon}
         </span>
      </button>
   );
}
