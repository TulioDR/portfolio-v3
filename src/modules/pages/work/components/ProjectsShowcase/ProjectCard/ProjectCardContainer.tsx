import { motion } from "framer-motion";

type Props = {
   onClick: () => void;
   children: React.ReactNode;
   id: string;
   cardRef: React.RefObject<HTMLDivElement>;
};

export default function ProjectCardContainer({
   onClick,
   children,
   id,
   cardRef,
}: Props) {
   return (
      <motion.div
         ref={cardRef}
         id={id}
         onClick={onClick}
         className="cursor-pointer relative flex-shrink-0 aspect-[6/9] flex items-center justify-center"
      >
         {children}
      </motion.div>
   );
}
