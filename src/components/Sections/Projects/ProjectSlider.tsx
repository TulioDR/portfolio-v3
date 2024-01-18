import { motion, MotionValue, useTransform } from "framer-motion";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";

import ProjectSlide from "./ProjectSlide";
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

   return <></>;
}
