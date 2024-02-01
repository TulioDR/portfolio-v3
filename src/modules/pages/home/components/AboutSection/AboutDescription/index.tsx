export default function AboutDescription() {
   return (
      <div className="flex flex-col h-screen w-3/4 py-20 px-40">
         <div className="h-full grid grid-cols-2 gap-5 2xl:gap-10 w-full pr-5 2xl:pr-10">
            <div className="w-full rounded-3xl bg-gradient-to-r from-[#8c1a56] to-[#fc9a74]"></div>
            <div className="w-full rounded-3xl bg-gradient-to-r from-[#103CE7] to-[#64E9FF]"></div>
            <div className="w-full rounded-3xl bg-gradient-to-r from-[#061700] to-[#52c234] col-span-2"></div>
         </div>
      </div>
   );
}
