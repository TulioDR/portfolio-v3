import React from "react";

type Props = {
   children: React.ReactNode;
};

export default function JumboImgContainer({ children }: Props) {
   return (
      <div className="relative w-full aspect-video">
         <div
            id="modal-container"
            className="aspect-video w-full absolute top-0 left-0"
         >
            {children}
         </div>
      </div>
   );
}
