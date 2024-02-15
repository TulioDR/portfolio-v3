import React from "react";

type Props = {
   position: [number, number, number];
   invert?: true;
};

export default function HalfCrystal({ position, invert }: Props) {
   //degrees to radians (dtr)
   const dtr = (degrees: number): number => {
      return degrees * (Math.PI / 180);
   };

   return (
      <mesh position={position} rotation={[dtr(invert ? 180 : 0), 0, 0]}>
         <coneGeometry args={[2, 3, 8]} />
         <meshStandardMaterial color="darkorange" />
      </mesh>
   );
}
