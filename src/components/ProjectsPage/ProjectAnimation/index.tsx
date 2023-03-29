import ProjectAnimationModel from "@/models/ProjectAnimationModel";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
   selectedProject: ProjectAnimationModel | null;
};

export default function ProjectAnimation({ selectedProject }: Props) {
   if (!selectedProject) return <></>;

   const { top, left, width, height, img, link } = selectedProject;

   const router = useRouter();
   const onAnimationComplete = () => {
      router.push(`/projects/${link}`);
   };

   return (
      <AnimatePresence>
         {selectedProject && (
            <motion.div
               transition={{ duration: 0.4 }}
               initial={{
                  top,
                  left,
                  width,
                  height,
                  borderWidth: 4,
               }}
               animate={{
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100vh",
                  borderWidth: 0,
               }}
               onAnimationComplete={onAnimationComplete}
               className="fixed z-10 border-black bg-white"
            >
               <motion.div className="aspect-video w-full h-full relative">
                  <Image
                     src={img}
                     alt="layout"
                     fill
                     sizes="100%"
                     className="object-cover"
                  />
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
