import { motion, MotionValue, useTransform } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import ProjectSlide from "./ProjectSlide";

import projects from "@/assets/projects";

interface Props {
   yProgress: MotionValue<any>;
}

export default function ProjectSlider({ yProgress }: Props) {
   const y = useTransform(yProgress, [0, 1], ["-50%", "50%"]);

   return (
      <div className="w-full h-full flex items-center justify-center overflow-hidden">
         <motion.div
            style={{ y }}
            className="w-full h-[calc(100%+80px)] pointer-events-none"
         >
            <Swiper
               loop={true}
               modules={[Autoplay]}
               autoplay={{ delay: 2000 }}
               className="w-full h-full"
            >
               {projects.map(({ img, link }, index) => (
                  <SwiperSlide key={link + index}>
                     <ProjectSlide src={img} alt={link} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </motion.div>
      </div>
   );
}
