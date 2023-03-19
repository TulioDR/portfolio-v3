import { motion, MotionValue, useSpring, useTransform } from "framer-motion";

interface Props {
   scrollYProgress: MotionValue<number>;
}

export default function AboutCard({ scrollYProgress }: Props) {
   const scrollYProgressVelocity = useSpring(scrollYProgress, {
      stiffness: 200,
      damping: 30,
   });

   const width = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["100%", "25%", "25%"]
   );
   const height = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["100%", "80%", "80%"]
   );
   const borderRadius = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["0px", "24px", "24px"]
   );

   const marginRight = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["0%", "25%", "25%"]
   );

   const padding = useTransform(
      scrollYProgressVelocity,
      [0, 0.75, 1],
      ["150px 250px", "56px 40px", "56px 40px"]
   );
   return (
      <div className="absolute top-0 left-0 w-full h-full flex items-center justify-end overflow-hidden">
         <motion.div
            style={{
               height,
               width,
               borderRadius,
               marginRight,
               padding,
            }}
            className="rounded-3xl bg-slate-800 text-white font-semibold text-3xl"
         >
            <div className="w-40">I love to think outside the box</div>
         </motion.div>
      </div>
   );
}
