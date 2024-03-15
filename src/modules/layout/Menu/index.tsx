import MenuContainer from "./MenuContainer";
import { useEffect, useState } from "react";
import MenuTitle from "./MenuTitle";
import SelectedMenuItem from "./SelectedMenuItem";
import SelectedDropdown from "./SelectedDropdown";
import MainMenu from "./MainMenu";

export default function Menu() {
   const [imageId, setImageId] = useState<string | null>(null);
   const [dropdownId, setDropdownId] = useState<string | null>(null);

   useEffect(() => {
      console.log(imageId);
   }, [imageId]);

   return (
      <MenuContainer>
         <MenuTitle />
         <MainMenu
            hide={imageId || dropdownId}
            setImageId={setImageId}
            setDropdownId={setDropdownId}
         />
         <SelectedDropdown
            hide={imageId}
            dropdownId={dropdownId}
            setDropdownId={setDropdownId}
            setImageId={setImageId}
         />
         <SelectedMenuItem imageId={imageId} setImageId={setImageId} />
      </MenuContainer>
   );
}
