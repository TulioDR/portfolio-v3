import PositionModel from "@/models/PositionModel";
import ProjectModel from "@/models/ProjectModel";
import { motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
   project: ProjectModel;
   newPosition: PositionModel;
};

export default function ProjectAnimation({ project, newPosition }: Props) {
   const router = useRouter();
   const onAnimationComplete = () => {
      console.log("animation complete");
      router.push(`/projects/${project.link}`);
   };

   const { x, y, width, height } = newPosition;

   return (
      <motion.div
         transition={{ duration: 0.4, ease: [0.645, 0.045, 0.355, 1] }}
         initial={{ left: x, top: y, width, height }}
         animate={{ left: 0, top: 0, width: "100vw", height: "100vh" }}
         onAnimationComplete={onAnimationComplete}
         className="fixed z-20 overflow-hidden"
      >
         <motion.div className="aspect-video w-full h-full relative">
            <Image
               src={project.img}
               alt="layout"
               fill
               sizes="100%"
               className="object-cover object-top"
            />
         </motion.div>
      </motion.div>
   );
}
