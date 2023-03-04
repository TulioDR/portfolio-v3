type Props = {
   toggle: () => void;
};

export default function FilterHeader({ toggle }: Props) {
   return (
      <div className="z-10 flex items-center justify-between pt-5 w-full sticky top-0 bg-white">
         <span className="truncate text-xl font-semibold">Filter Projects</span>
         <button
            onClick={toggle}
            className="w-10 flex-shrink-0 aspect-square grid place-content-center hover:text-white hover:bg-slate-800 rounded-lg"
         >
            <span className="material-icons">menu</span>
         </button>
      </div>
   );
}
