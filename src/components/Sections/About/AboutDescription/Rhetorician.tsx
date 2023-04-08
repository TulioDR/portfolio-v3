import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
   OrbitControls,
   Preload,
   useGLTF,
   PerspectiveCamera,
} from "@react-three/drei";

import CanvasLoader from "./CanvasLoader";

const RhetoricianInner = () => {
   const rhetorician = useGLTF("./rhetorician/scene.gltf");

   return (
      <primitive
         object={rhetorician.scene}
         scale={6}
         position-y={-26}
         rotation-y={0}
      />
   );
};

export default function Rhetorician() {
   return (
      <Canvas
         shadows
         frameloop="demand"
         dpr={[1, 2]}
         gl={{ preserveDrawingBuffer: true }}
      >
         <PerspectiveCamera
            makeDefault
            fov={400}
            position={[0, 0, 20]}
            near={0.1}
         />
         <Suspense fallback={<CanvasLoader />}>
            <OrbitControls
               autoRotate
               enableZoom={false}
               maxPolarAngle={Math.PI / 2}
               minPolarAngle={Math.PI / 2}
            />
            <RhetoricianInner />

            <Preload all />
         </Suspense>
      </Canvas>
   );
}
