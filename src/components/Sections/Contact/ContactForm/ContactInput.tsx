type Props = {
   placeholder: string;
};

export default function ContactInput({ placeholder }: Props) {
   return (
      <div className="w-full relative h-10 bg-white px-5 rounded-xl">
         <input
            type="text"
            className="w-full outline-none h-full text-sm bg-transparent text-black"
            placeholder={placeholder}
         />
      </div>
   );
}
