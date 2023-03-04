type Props = {
   isSidebarExpanded: boolean;
   children: React.ReactNode;
};

export default function SidebarContainer({
   isSidebarExpanded,
   children,
}: Props) {
   return (
      <div
         className={`flex justify-end ${isSidebarExpanded ? "w-64" : "w-20"}`}
      >
         <div
            className={`fixed flex flex-col bottom-0 duration-300 h-screen ${
               isSidebarExpanded ? "w-64" : "w-20"
            }`}
         >
            {children}
         </div>
      </div>
   );
}
