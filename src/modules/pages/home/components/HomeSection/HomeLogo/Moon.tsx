import Image from "next/image";
import moon from "@/assets/images/logo/moon.svg";
import { motion, AnimationControls } from "framer-motion";
type Props = {
   moonControls: AnimationControls;
};

export default function Moon({ moonControls }: Props) {
   return (
      <div
         data-depth="0.4"
         className="overflow-hidden rounded-full w-full h-full"
      >
         <div className="relative w-full h-full border border-main-primary">
            <Image src={moon} alt="moon" fill sizes="100%" priority />
         </div>
         <motion.div
            initial={{ x: 0, y: 0 }}
            animate={moonControls}
            className="bg-[#161B21] h-full w-full rounded-full absolute top-0 left-0"
         ></motion.div>
      </div>
   );
}
