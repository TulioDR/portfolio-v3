import React from "react";
import MenuItem from "../MenuItem";
import MenuBranches from "../MenuBranches";

type Props = {
   hide: string | null;
   setDropdownId: React.Dispatch<React.SetStateAction<string | null>>;
   setImageId: React.Dispatch<React.SetStateAction<string | null>>;
   dropdownId?: string | null;
};

export default function MainMenu({
   hide,
   setImageId,
   setDropdownId,
   dropdownId,
}: Props) {
   return (
      <div className="w-full h-full flex items-center justify-center">
         <div
            className={`flex flex-col items-center duration-500 ${
               hide ? "opacity-0 pointer-events-none" : ""
            }`}
         >
            <MenuItem label="home" setImageId={setImageId} href="/" />
            <MenuBranches />
            <div className="flex gap-10">
               <MenuItem href="/about" label="about" setImageId={setImageId} />
               <MenuItem
                  href="/work"
                  label="work"
                  setImageId={setImageId}
                  onDropdownClick={() => setDropdownId("dropdown-work")}
                  dropdown
                  dropdownId={dropdownId}
               />
               <MenuItem
                  href="/contact"
                  label="contact"
                  setImageId={setImageId}
               />
            </div>
         </div>
      </div>
   );
}
