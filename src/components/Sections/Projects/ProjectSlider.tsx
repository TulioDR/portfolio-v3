import {
   AnimatePresence,
   AnimationControls,
   motion,
   MotionValue,
   useTransform,
} from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectSlide from "./ProjectSlide";

import filmOrganizer from "@/assets/images/projects/film-organizer.png";
import pokedex from "@/assets/images/projects/pokedex.png";
import dashboard from "@/assets/images/projects/dashboard.png";
import { useRouter } from "next/router";

type Props = {
   scrollYProgressVelocity: MotionValue<any>;
   showScreen: boolean;
   controls: AnimationControls;
};

export default function ProjectSlider({
   scrollYProgressVelocity,
   showScreen,
   controls,
}: Props) {
   const scale = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      [0.3, 1, 1]
   );
   const rotate = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["-45deg", "0deg", "0deg"]
   );
   const router = useRouter();
   // const { isBackFromProjects, setIsBackFromProjects } =
   //    useBackFromProjectsContext();

   const onAnimationComplete = () => {
      console.log("animation complete");
      // if (!isBackFromProjects)
      router.push("/projects");
      // else setIsBackFromProjects(false);
   };
   // const isBackFromProjects = false;
   return (
      <motion.div
         style={{ scale, rotate }}
         // initial={isBackFromProjects ? { scale: 1.5 } : {}}
         animate={controls}
         onAnimationComplete={onAnimationComplete}
         className="rounded-3xl aspect-video bg-gradient-to-r from-red-900 to-yellow-700 py-2 px-4 h-full"
      >
         <div className="rounded-[30px] w-full h-full bg-gray-200 overflow-hidden relative">
            <Swiper className="w-full h-full">
               <SwiperSlide>
                  <ProjectSlide src={filmOrganizer} />
               </SwiperSlide>
               <SwiperSlide>
                  <ProjectSlide src={pokedex} />
               </SwiperSlide>
               <SwiperSlide>
                  <ProjectSlide src={dashboard} />
               </SwiperSlide>
            </Swiper>
            <AnimatePresence>
               {showScreen && (
                  <motion.div
                     // initial={isBackFromProjects ? {} : { opacity: 0 }}
                     animate={{ opacity: 1 }}
                     exit={{ opacity: 0 }}
                     transition={{ duration: 0.2 }}
                     className="absolute top-0 left-0 bg-gray-200 h-full w-full z-10"
                  ></motion.div>
               )}
            </AnimatePresence>
         </div>
      </motion.div>
   );
}
