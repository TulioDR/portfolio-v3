import ProjectAnimationModel from "@/models/ProjectAnimationModel";
import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useRouter } from "next/router";

type Props = {
   selectedProject: ProjectAnimationModel | null;
};

export default function ProjectAnimation({ selectedProject }: Props) {
   const router = useRouter();
   const onAnimationComplete = () => {
      router.push(`/projects/${link}`);
   };

   if (!selectedProject) return <></>;

   const { top, left, width, height, img, link } = selectedProject;

   return (
      <AnimatePresence>
         {selectedProject && (
            <motion.div
               transition={{ duration: 0.8, ease: [0.645, 0.045, 0.355, 1] }}
               initial={{
                  top,
                  left,
                  width,
                  height,
                  borderRadius: 24,
               }}
               animate={{
                  top: 0,
                  left: 0,
                  width: "100%",
                  height: "100vh",
                  borderRadius: 0,
               }}
               onAnimationComplete={onAnimationComplete}
               className="fixed z-10 bg-white overflow-hidden"
            >
               <motion.div className="aspect-video w-full h-full relative">
                  <Image
                     src={img}
                     alt="layout"
                     fill
                     sizes="100%"
                     className="object-cover object-top"
                  />
               </motion.div>
            </motion.div>
         )}
      </AnimatePresence>
   );
}
