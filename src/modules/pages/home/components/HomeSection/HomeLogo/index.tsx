import { Canvas } from "@react-three/fiber";

import React from "react";

import { OrbitControls, PerspectiveCamera } from "@react-three/drei";
import Base from "./Base";
import Crystal from "./Crystal";
type Props = {};

export default function HomeLogo({}: Props) {
   return (
      <Canvas shadows={true}>
         <OrbitControls
            enableZoom={false}
            minPolarAngle={Math.PI / 2}
            maxPolarAngle={Math.PI / 2}
         />
         <PerspectiveCamera
            makeDefault
            fov={75}
            position={[0, 0, 6]}
            near={0.1}
            far={1000}
         />
         <ambientLight intensity={0.1} />
         <Crystal y={0.5} />
         <Base position={[0, -2.2, 0]} />
         <pointLight
            intensity={0.2}
            color={"orange"}
            castShadow
            position={[0, 3, 0]}
         />
         <pointLight
            intensity={2}
            color={"orange"}
            castShadow
            position={[0, -2, 0]}
         />
      </Canvas>
   );
}
