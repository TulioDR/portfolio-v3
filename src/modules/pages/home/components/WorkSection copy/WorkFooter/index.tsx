import React from "react";
import MainButton from "../../MainButton";
import ScrollIndicator from "../../ScrollIndicator";
import { MotionValue } from "framer-motion";

type Props = {
   scroll: MotionValue<number>;
};

export default function WorkFooter({ scroll }: Props) {
   return (
      <div className="absolute bottom-0 left-0 pb-10 pl-20 pr-10 w-full flex justify-between items-end">
         <ScrollIndicator scroll={scroll} />
         <MainButton>All work</MainButton>
      </div>
   );
}
