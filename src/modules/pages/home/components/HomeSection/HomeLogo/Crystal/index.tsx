import React, { useRef } from "react";
import HalfCrystal from "./HalfCrystal";
import { useFrame } from "@react-three/fiber";
import { Group } from "three";

type Props = {
   y: number;
};

export default function Crystal({ y }: Props) {
   const groupRef = useRef<Group>(null);
   useFrame(() => {
      if (!groupRef.current) return;
      groupRef.current.rotation.y += 0.01;
   });
   return (
      <group ref={groupRef} position={[0, y, 0]}>
         <HalfCrystal position={[0, 1.56, 0]} />
         <HalfCrystal position={[0, -1.56, 0]} invert />
      </group>
   );
}
