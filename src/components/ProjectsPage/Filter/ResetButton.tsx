import useLanguageContext from "@/context/LanguageContext";

type Props = {
   onClick: () => void;
};

export default function ResetButton({ onClick }: Props) {
   const { currentLanguage } = useLanguageContext();
   const { reset } = currentLanguage.projects.filer;

   return (
      <button
         onClick={onClick}
         className="rounded-lg py-1 px-3 text-white bg-primary mr-2 text-sm"
      >
         {reset}
      </button>
   );
}
