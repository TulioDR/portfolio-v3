import { motion, useScroll, useTransform } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import ProjectSlide from "./ProjectSlide";
import projects from "@/assets/projects";
import { useRef } from "react";

type Props = {};

export default function ProjectsBackground({}: Props) {
   const projectsSliderRef = useRef(null);
   const { scrollYProgress } = useScroll({
      target: projectsSliderRef,
      offset: ["start start", "end start"],
   });

   const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);

   return (
      <div ref={projectsSliderRef} className="w-full h-full brightness-75">
         <motion.div style={{ y }} className="w-full h-full">
            <Swiper
               loop={true}
               modules={[Autoplay]}
               autoplay={{ delay: 1500 }}
               className="w-full h-full"
            >
               {projects.map(({ img, link }, index) => (
                  <SwiperSlide key={link + index}>
                     <ProjectSlide src={img} />
                  </SwiperSlide>
               ))}
            </Swiper>
         </motion.div>
      </div>
   );
}
