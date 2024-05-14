// import MainContainer from "@/components/MainContainer";

// import { useScroll, useSpring } from "framer-motion";
// import { useRouter } from "next/router";

// import ProjectSlider from "./ProjectSlider";
// import ProjectsTitle from "./ProjectsTitle";
// import ViewProjectsButton from "./ViewProjectsButton";
// import { useEffect, useRef } from "react";
// import { Element, scroller, Events } from "react-scroll";
// import SectionContainer from "../SectionContainer";

export default function ProjectsSection() {
   // const projectsSliderRef = useRef(null);
   // const { scrollYProgress } = useScroll({
   //    target: projectsSliderRef,
   //    offset: ["start end", "end end"],
   // });

   // const scrollYProgressVelocity = useSpring(scrollYProgress, {
   //    stiffness: 200,
   //    damping: 30,
   // });

   // const router = useRouter();
   // useEffect(() => {
   //    if (!router) return;
   //    Events.scrollEvent.register("end", () => {
   //       router.push("/projects", undefined, { scroll: false });
   //       Events.scrollEvent.remove("end");
   //    });
   // }, [router]);

   // const handleClick = () => {
   //    scroller.scrollTo("myScrollToElement", {
   //       duration: 500,
   //       smooth: true,
   //       ease: "easeInOut",
   //    });
   // };

   return <></>;
   // return (
   // <SectionContainer>
   //    <div className="sticky top-0 h-screen w-full bg-gradient-to-b from-main-gray to-main-primary">
   //       <div className="w-full h-full flex items-center justify-center overflow-hidden relative">
   //          <ProjectSlider
   //             scrollYProgressVelocity={scrollYProgressVelocity}
   //          />
   //          <div className="absolute top-0 left-0 w-full h-full">
   //             <MainContainer>
   //                <div className="flex items-center justify-between h-full overflow-hidden">
   //                   <ProjectsTitle
   //                      scrollYProgressVelocity={scrollYProgressVelocity}
   //                   />
   //                   <ViewProjectsButton
   //                      onClick={handleClick}
   //                      scrollYProgressVelocity={scrollYProgressVelocity}
   //                   />
   //                </div>
   //             </MainContainer>
   //          </div>
   //       </div>
   //    </div>
   //    <div
   //       id="projects"
   //       ref={projectsSliderRef}
   //       className="h-screen bg-black w-full"
   //    >
   //       <Element name="myScrollToElement"></Element>
   //    </div>
   // </SectionContainer>
   // );
}
