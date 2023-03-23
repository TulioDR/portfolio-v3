type Props = {
   children: React.ReactNode;
};

export default function SidebarContainer({ children }: Props) {
   return (
      <div className={`flex justify-end ${true ? "w-64" : "w-20"}`}>
         <div
            className={`fixed flex flex-col bottom-0 duration-300 h-screen ${
               true ? "w-64" : "w-20"
            }`}
         >
            {children}
         </div>
      </div>
   );
}
