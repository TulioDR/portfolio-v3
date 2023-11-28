import PositionModel from "@/models/PositionModel";
import { AnimationControls, motion } from "framer-motion";
import Image from "next/image";
import ProjectModel from "@/models/ProjectModel";

type Props = {
   position: PositionModel;
   project: ProjectModel;
   animationControls: AnimationControls;
};

export default function JumboImg({
   position,
   project,
   animationControls,
}: Props) {
   const { x, y, width, height } = position;
   return (
      <motion.div
         initial={{ x, y, width, height }}
         animate={animationControls}
         exit={{
            x,
            y,
            width,
            height,
            transition: { duration: 0.4, ease: [0.645, 0.045, 0.355, 1] },
         }}
         className="relative"
      >
         <Image
            src={project.img}
            alt={project.title}
            sizes="100%"
            fill
            className="object-cover"
         />
      </motion.div>
   );
}
