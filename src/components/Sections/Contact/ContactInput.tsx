type Props = {
   placeholder: string;
};

export default function ContactInput({ placeholder }: Props) {
   return (
      <div className="w-full relative h-10">
         <input
            type="text"
            className="w-full outline-none h-full text-sm"
            placeholder={placeholder}
         />
         <div className="w-full absolute bottom-0 h-1 bg-slate-800"></div>
      </div>
   );
}
