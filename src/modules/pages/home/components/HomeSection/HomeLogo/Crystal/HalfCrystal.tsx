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
         <coneGeometry args={[1.5, 2, 4]} />
         <meshStandardMaterial color="orange" />
      </mesh>
   );
}
