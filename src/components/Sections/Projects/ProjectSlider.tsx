import { motion, MotionValue, useTransform } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import ProjectSlide from "./ProjectSlide";

import filmOrganizer from "@/assets/images/projects/film-organizer.png";
import pokedex from "@/assets/images/projects/pokedex.png";
import dashboard from "@/assets/images/projects/dashboard.png";

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

   return (
      <motion.div
         style={{ scale, rotate }}
         className="rounded-3xl aspect-video bg-gradient-to-r from-red-900 to-yellow-700 py-2 px-4 h-full"
      >
         <div className="rounded-[30px] w-full h-full bg-gray-200 overflow-hidden">
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
         </div>
      </motion.div>
   );
}
