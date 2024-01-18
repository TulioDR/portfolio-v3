import React from "react";
import Tilt from "react-parallax-tilt";

type Props = {
   children: React.ReactNode;
   tiltEnable: boolean;
};

export default function JumbotronContainer({ children, tiltEnable }: Props) {
   return (
      <Tilt
         tiltEnable={true}
         perspective={1000}
         transitionSpeed={500}
         trackOnWindow={true}
         tiltReverse={true}
         tiltAngleXManual={tiltEnable ? null : 0}
         tiltAngleYManual={tiltEnable ? null : 0}
         style={{ transformStyle: "preserve-3d" }}
         className="relative w-11/12 sm:w-5/6 md:w-2/3 lg:w-1/2"
      >
         {children}
      </Tilt>
   );
}
