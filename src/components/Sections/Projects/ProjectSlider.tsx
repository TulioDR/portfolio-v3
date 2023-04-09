import { motion, MotionValue, useTransform } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import ProjectSlide from "./ProjectSlide";
import useBackFromProjectsContext from "@/context/BackFromProjectsContext";
import projects from "@/assets/projects";

type Props = {
   scrollYProgressVelocity: MotionValue<any>;
};

export default function ProjectSlider({ scrollYProgressVelocity }: Props) {
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
   const { isBackFromProjects, setIsBackFromProjects } =
      useBackFromProjectsContext();

   const onAnimationComplete = () => {
      setIsBackFromProjects(false);
   };
   return (
      <motion.div
         style={isBackFromProjects ? {} : { scale, rotate }}
         initial={{ scale: 1.5 }}
         animate={{ scale: 1, transition: { duration: 1 } }}
         exit={{ scale: 1.5, transition: { duration: 1, delay: 0.5 } }}
         onAnimationComplete={onAnimationComplete}
         className="rounded-3xl aspect-video bg-gradient-to-r from-red-900 to-yellow-700 py-2 px-4 h-full"
      >
         <div className="rounded-[30px] w-full h-full bg-main-white overflow-hidden relative">
            <Swiper
               loop={true}
               modules={[Autoplay]}
               autoplay={{ delay: 2000 }}
               className="w-full h-full"
            >
               {projects.map(({ img, link }, index) => (
                  <SwiperSlide key={link + index}>
                     <ProjectSlide src={img} />
                  </SwiperSlide>
               ))}
            </Swiper>
            <motion.div
               initial={{ opacity: 1 }}
               animate={{
                  opacity: 0,
                  transition: { duration: 0.5 },
               }}
               exit={{ opacity: 1, transition: { duration: 0.5 } }}
               className="absolute top-0 left-0 bg-main-white h-full w-full z-10"
            ></motion.div>
         </div>
      </motion.div>
   );
}
