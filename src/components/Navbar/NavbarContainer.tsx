import useNavbarContext from "@/context/NavbarContext";
import { motion } from "framer-motion";
import MainContainer from "../MainContainer";

type Props = {
   children: React.ReactNode;
};

export default function NavbarContainer({ children }: Props) {
   const { isWhite } = useNavbarContext();
   return (
      <motion.div
         initial={{ y: "-100%" }}
         animate={{ y: 0 }}
         transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
         className={`fixed top-0 w-full z-30 duration-500 ${
            isWhite ? "text-white" : "text-black"
         }`}
      >
         <MainContainer>{children}</MainContainer>
      </motion.div>
   );
}
