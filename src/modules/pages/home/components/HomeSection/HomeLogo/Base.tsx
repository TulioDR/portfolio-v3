import React from "react";

import { ExtrudeGeometry, Path, Shape } from "three";

type Props = {
   position: [number, number, number];
};

export default function Base({ position }: Props) {
   const extrudeSettings = {
      amount: 2,
      steps: 1,
      bevelEnabled: true,
      curveSegments: 50,
      depth: 0.5,
   };

   const arcShape = new Shape();
   arcShape.absarc(0, 0, 2.8, 0, Math.PI * 2, false);

   const holePath = new Path();
   holePath.absarc(0, 0, 1.4, 0, Math.PI * 2, true);
   arcShape.holes.push(holePath);

   return (
      <mesh
         position={position}
         rotation={[
            90 * (Math.PI / 180),
            0 * (Math.PI / 180),
            0 * (Math.PI / 180),
         ]}
      >
         <primitive
            object={new ExtrudeGeometry(arcShape, extrudeSettings)}
            attach="geometry"
         />
         <meshStandardMaterial color="lightgray" />
      </mesh>
   );
}
