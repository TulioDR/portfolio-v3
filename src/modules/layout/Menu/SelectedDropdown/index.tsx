import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import MenuItem from "../MenuItem";
import VerticalBranch from "../MenuBranches/VerticalBranch";
import HorizontalBranch from "../MenuBranches/HorizontalBranch";

type Props = {
   dropdownId: string | null;
   setDropdownId: React.Dispatch<React.SetStateAction<string | null>>;
   setImageId: React.Dispatch<React.SetStateAction<string | null>>;
   hide: string | null;
};

export default function SelectedDropdown({
   dropdownId,
   setDropdownId,
   setImageId,
   hide,
}: Props) {
   return (
      <AnimatePresence>
         {dropdownId && (
            <motion.div
               className={`absolute top-0 left-0 w-full h-full flex items-center justify-center z-10 overflow-hidden p-20 duration-500 ${
                  hide ? "pointer-events-none opacity-0" : ""
               }`}
            >
               <div className="flex flex-col items-center justify-center overflow-hidden h-full w-full">
                  <MenuItem
                     label="work"
                     setImageId={setImageId}
                     href="/work"
                     dropdown
                     onDropdownClick={() => setDropdownId(null)}
                     dropdownId={dropdownId}
                  />
                  <motion.div
                     initial={{ opacity: 0 }}
                     animate={{
                        opacity: 1,
                        transition: { duration: 0.2, delay: 0.4 },
                     }}
                     exit={{ opacity: 0, transition: { duration: 0.2 } }}
                     className="w-full h-full flex flex-col items-center"
                  >
                     <VerticalBranch />
                     <HorizontalBranch />
                     <div className="flex justify-between w-full">
                        <VerticalBranch />
                        <VerticalBranch />
                     </div>
                     <div className="w-full flex gap-10 overflow-auto pb-5">
                        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
                           <MenuItem
                              label={value.toString()}
                              setImageId={setImageId}
                              href="/work"
                           />
                        ))}
                     </div>
                  </motion.div>
               </div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
