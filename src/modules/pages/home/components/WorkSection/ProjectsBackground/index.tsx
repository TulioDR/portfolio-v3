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
      offset: ["start end", "end start"],
   });

   const y = useTransform(scrollYProgress, [0, 1], ["-50%", "50%"]);

   return (
      <motion.div
         style={{ y }}
         ref={projectsSliderRef}
         className="w-full h-full brightness-50"
      >
         <Swiper
            loop={true}
            modules={[Autoplay]}
            autoplay={{ delay: 3000 }}
            className="w-full h-full"
         >
            {projects.map(({ img, link }, index) => (
               <SwiperSlide key={link + index}>
                  <ProjectSlide src={img} />
               </SwiperSlide>
            ))}
         </Swiper>
      </motion.div>
   );
}
