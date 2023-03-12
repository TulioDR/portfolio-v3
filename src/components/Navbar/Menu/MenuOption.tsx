import { motion } from "framer-motion";

type Props = {
   children: React.ReactNode;
   onClick: () => void;
   closeMenu: () => void;
};

export default function MenuOption({ children, onClick, closeMenu }: Props) {
   const option = {
      hidden: { x: -60, opacity: 0 },
      visible: {
         x: 0,
         opacity: 1,
         transition: {
            duration: 0.4,
         },
      },
   };

   const handleClick = () => {
      onClick();
      closeMenu();
   };

   return (
      <motion.button
         variants={option}
         className="mx-auto py-2 text-2xl sm:text-3xl font-extrabold tracking-wide"
         onClick={handleClick}
      >
         {children}
      </motion.button>
   );
}
