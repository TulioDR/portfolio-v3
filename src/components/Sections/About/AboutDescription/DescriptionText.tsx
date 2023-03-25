import { useTransform, MotionValue, motion } from "framer-motion";

type Props = {
   scrollVelocity: MotionValue<any>;
};

export default function DescriptionText({ scrollVelocity }: Props) {
   const x1 = useTransform(scrollVelocity, [0.3, 0.6], ["-25%", "0%"]);
   const x2 = useTransform(scrollVelocity, [0.4, 0.7], ["-25%", "0%"]);
   const x3 = useTransform(scrollVelocity, [0.5, 0.8], ["-25%", "0%"]);
   const x4 = useTransform(scrollVelocity, [0.6, 0.9], ["-25%", "0%"]);

   const y1 = useTransform(scrollVelocity, [0.3, 0.6], [100, 0]);
   const y2 = useTransform(scrollVelocity, [0.4, 0.7], [100, 0]);
   const y3 = useTransform(scrollVelocity, [0.5, 0.8], [100, 0]);
   const y4 = useTransform(scrollVelocity, [0.6, 0.9], [100, 0]);

   const op1 = useTransform(scrollVelocity, [0.3, 0.6], [0, 1]);
   const op2 = useTransform(scrollVelocity, [0.4, 0.7], [0, 1]);
   const op3 = useTransform(scrollVelocity, [0.5, 0.8], [0, 1]);
   const op4 = useTransform(scrollVelocity, [0.6, 0.9], [0, 1]);

   return (
      <div className="space-y-5 text-xs sm:text-sm md:text-base lg:text-lg text-black">
         <motion.div style={{ x: x1, y: y1, opacity: op1 }}>
            {
               "I'm a self-taught Front-End Developer with basic knowledge ofBack-End Technology."
            }
         </motion.div>
         <motion.div style={{ x: x2, y: y2, opacity: op2 }}>
            {
               "I'm a well-organized person, problem solver with high attention to detail that specializes on React."
            }
         </motion.div>
         <motion.div style={{ x: x3, y: y3, opacity: op3 }}>
            Coding is a passion that motivates me to learn and improve my skills
            day by day, either with my team or on my own.
         </motion.div>
         <motion.div style={{ x: x4, y: y4, opacity: op4 }}>
            Interested in the entire frontend spectrum and working on ambitious
            projects with positive people.
         </motion.div>
      </div>
   );
}
