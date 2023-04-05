import cloud1 from "@/assets/images/logo/cloud1.svg";
import cloud2 from "@/assets/images/logo/cloud2.svg";
import cloud3 from "@/assets/images/logo/cloud3.svg";
import cloud4 from "@/assets/images/logo/cloud4.svg";
import cloud5 from "@/assets/images/logo/cloud5.svg";
import { useAnimationControls } from "framer-motion";
import { useEffect } from "react";
import Parallax from "parallax-js";
import Eagle from "./Eagle";
import Moon from "./Moon";
import Cloud from "./Cloud";
import useInitialLoadingContext from "@/context/InitialLoadingContext";

export default function HomeLogo() {
   const moonControls = useAnimationControls();
   const cloudControls = useAnimationControls();

   const { isFullyLoaded } = useInitialLoadingContext();

   useEffect(() => {
      if (!isFullyLoaded) return;
      moonControls.start({
         x: "-75%",
         y: "-75%",
         transition: { duration: 1, delay: 1, ease: "easeInOut" },
      });
      cloudControls.start({
         opacity: 1,
         transition: { duration: 1, delay: 1, ease: "easeInOut" },
      });
   }, [isFullyLoaded]);

   useEffect(() => {
      var scene = document.getElementById("moon-scene");
      new Parallax(scene);
   }, []);

   return (
      <div className="absolute top-40 right-10 sm:right-20 rounded-full w-2/3 sm:w-48 md:w-60 lg:w-80 xl:w-96 2xl:w-[30rem]">
         <div id="moon-scene" className="relative w-full aspect-square">
            <Moon moonControls={moonControls} />
            <Eagle />
            <Cloud
               cloudControls={cloudControls}
               src={cloud1}
               alt="cloud1"
               position="-translate-x-1/3"
            />
            <Cloud
               cloudControls={cloudControls}
               src={cloud2}
               alt="cloud2"
               position="translate-x-1/4 -translate-y-1/3 ml-auto"
            />
            <Cloud
               cloudControls={cloudControls}
               src={cloud3}
               alt="cloud3"
               position="translate-x-1/2 ml-auto"
               flex="items-center"
            />
            <Cloud
               cloudControls={cloudControls}
               src={cloud4}
               alt="cloud4"
               position="translate-x-1/4 translate-y-1/3 ml-auto"
               flex="items-end"
            />
            <Cloud
               cloudControls={cloudControls}
               src={cloud5}
               alt="cloud5"
               position="-translate-x-1/2"
               flex="items-end"
            />
         </div>
      </div>
   );
}
