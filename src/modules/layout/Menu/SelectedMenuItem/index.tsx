import { AnimatePresence, motion } from "framer-motion";
import React from "react";
import SelectedImage from "./SelectedImage";

type Props = {
   imageId: string | null;
   setImageId: React.Dispatch<React.SetStateAction<string | null>>;
};

export default function SelectedMenuItem({ imageId, setImageId }: Props) {
   return (
      <AnimatePresence>
         {imageId && (
            <div className="absolute top-0 left-0 w-full h-full flex gap-10 p-20 z-20">
               <div className="flex-1 h-full flex items-center">
                  <SelectedImage layoutId={imageId} />
               </div>
               <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.2 }}
                  className="flex-1 h-full flex items-center justify-center relative gap-5"
               >
                  <button
                     onClick={() => setImageId(null)}
                     className="rounded-full aspect-square grid place-content-center h-12 border border-white hover:bg-white hover:text-black"
                  >
                     <span className="material-symbols-outlined">
                        arrow_back_ios_new
                     </span>
                  </button>
                  <button className="rounded-full border border-white px-10 h-12 hover:bg-white hover:text-black">
                     Go to page
                  </button>
               </motion.div>
            </div>
         )}
      </AnimatePresence>
   );
}
