import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { useRouter } from "next/router";
import DropdownButton from "./DropdownButton";
import SelectedMark from "./SelectedMark";

type Props = {
   label: string;
   setImageId: React.Dispatch<React.SetStateAction<string | null>>;
   onDropdownClick?: () => void;
   dropdown?: true;
   href: string;
   dropdownId?: string | null;
};

export default function MenuItem({
   label,
   setImageId,
   dropdown,
   href,
   onDropdownClick,
   dropdownId,
}: Props) {
   const handleClick = () => {
      setImageId(label);
   };

   const [isSelected, setIsSelected] = useState<boolean>(false);

   const { pathname } = useRouter();
   useEffect(() => {
      if (href === pathname) setIsSelected(true);
      else setIsSelected(false);
   }, [isSelected]);

   return (
      <motion.div layoutId={`dropdown-${label}`} className="relative z-10">
         <div className="text-white text-center font-semibold capitalize">
            {label}
         </div>
         <div onClick={handleClick} className="aspect-video w-60 relative">
            <motion.div
               layoutId={label}
               transition={{ duration: 0.5, ease: [0.7, 0, 0.2, 1] }}
               className="bg-primary w-full h-full  border-4 border-b-gray-200 "
            ></motion.div>
            {isSelected && <SelectedMark />}
         </div>
         {dropdown && (
            <DropdownButton
               dropdownId={dropdownId}
               onClick={onDropdownClick!}
            />
         )}
      </motion.div>
   );
}
