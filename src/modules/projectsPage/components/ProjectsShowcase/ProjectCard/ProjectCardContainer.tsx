import { motion } from "framer-motion";
import Tilt from "react-parallax-tilt";
type Props = {
   onClick: () => void;
   children: React.ReactNode;
   id: string;
};

export default function ProjectCardContainer({ onClick, children, id }: Props) {
   return (
      <motion.div
         layout
         id={id}
         initial={{ opacity: 0, scale: 0.9 }}
         animate={{ opacity: 1, scale: 1 }}
         exit={{ opacity: 0, scale: 0.9 }}
         // transition={{ duration: 0.4 }}
         transition={{ type: "spring", duration: 0.6 }}
         onClick={onClick}
         className={`cursor-pointer w-full aspect-video relative`}
      >
         <Tilt
            glareEnable
            perspective={1000}
            transitionSpeed={800}
            tiltReverse
            className="w-full h-full group"
            style={{ transformStyle: "preserve-3d" }}
         >
            {/* <div className="absolute bg-gradient-to-br from-main-orange to-main-gold bg-repeat -inset-0 group-hover:-inset-1 group-hover:blur duration-500"></div> */}
            {children}
         </Tilt>
      </motion.div>
   );
}
