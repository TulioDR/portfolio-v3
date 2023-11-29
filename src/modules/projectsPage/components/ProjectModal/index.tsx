import { useEffect, useState } from "react";
import PositionModel from "@/models/PositionModel";
import ProjectModalBackdrop from "./ProjectModalBackdrop";
import ProjectModel from "@/models/ProjectModel";
import Jumbotron from "./Jumbotron";
import CloseModalButton from "./CloseModalButton";
import { useAnimationControls } from "framer-motion";
import {
   exitJumboBackground,
   exitJumboTitle,
   exitModalButtons,
   initialJumboBackground,
   initialJumboImg,
   initialJumboTitle,
   initialModalButtons,
} from "../../animations/jumbotronAnimations";
import ModalButton from "./ModalButton";
import ModalButtonsContainer from "./ModalButtonsContainer";
import ProjectAnimation from "./ProjectAnimation";

type Props = {
   close: () => void;
   project: ProjectModel;
};

export default function ProjectModal({ close, project }: Props) {
   const [position, setPosition] = useState<PositionModel | null>(null);
   const [tiltEnable, setTiltEnable] = useState<boolean>(true);
   const [showCloseButton, setShowCloseButton] = useState<boolean>(false);

   const jumboImgControls = useAnimationControls();
   const jumboBackgroundControls = useAnimationControls();
   const jumboTitleControls = useAnimationControls();
   const modalButtonsAnimations = useAnimationControls();

   useEffect(() => {
      const container = document.getElementById("modal-container")!;
      const { x: x1, y: y1 } = container.getBoundingClientRect();

      const card = document.getElementById(project.link)!;
      const { x: x2, y: y2, width, height } = card.getBoundingClientRect();

      card.style.transitionDuration = "0ms";
      card.style.visibility = "hidden";

      document.body.style.overflowY = "hidden";

      if (window.innerWidth > 640) {
         document.body.style.paddingRight = "15px";
      }

      const x = x2 - x1;
      const y = y2 - y1;
      setPosition({ x, y, width, height });
   }, [project]);

   useEffect(() => {
      if (!position) return;
      const startInitialAnimation = async () => {
         await jumboImgControls.start(initialJumboImg);
         await jumboBackgroundControls.start(initialJumboBackground);
         await jumboTitleControls.start(initialJumboTitle);
         await modalButtonsAnimations.start(initialModalButtons);
         setShowCloseButton(true);
      };
      startInitialAnimation();
   }, [
      initialJumboImg,
      initialJumboBackground,
      initialJumboTitle,
      jumboImgControls,
      jumboBackgroundControls,
      jumboTitleControls,
      modalButtonsAnimations,
      initialModalButtons,
      position,
   ]);

   const handleClose = async () => {
      setTiltEnable(false);
      modalButtonsAnimations.start(exitModalButtons);
      await jumboTitleControls.start(exitJumboTitle);
      await jumboBackgroundControls.start(exitJumboBackground);
      close();
      const card = document.getElementById(project.link)!;
      setTimeout(() => {
         card.style.visibility = "visible";
      }, 400);
   };

   const [newPosition, setNewPosition] = useState<PositionModel | null>(null);
   const learnMore = () => {
      setTiltEnable(false);
      const container = document.getElementById("modal-container")!;
      const { x, y, width, height } = container.getBoundingClientRect();
      setNewPosition({ x, y, width, height });
   };

   const visitSite = () => {
      window.open(project.website, "_blank");
   };
   const viewRepo = () => {
      window.open(project.repository, "_blank");
   };

   return (
      <div className="fixed top-0 left-0 w-screen h-screen z-[60]">
         <ProjectModalBackdrop />
         {showCloseButton && <CloseModalButton onClick={handleClose} />}
         <div className="absolute flex flex-col items-center justify-center gap-5 top-0 left-0 w-full h-full">
            <Jumbotron
               project={project}
               position={position}
               tiltEnable={tiltEnable}
               jumboImgControls={jumboImgControls}
               jumboTitleControls={jumboTitleControls}
               jumboBackgroundControls={jumboBackgroundControls}
            />
            <ModalButtonsContainer animationControls={modalButtonsAnimations}>
               <ModalButton onClick={learnMore}>Learn more</ModalButton>
               <ModalButton onClick={visitSite}>Visit Site</ModalButton>
               <ModalButton onClick={viewRepo}>View Repository</ModalButton>
            </ModalButtonsContainer>
         </div>
         {newPosition && (
            <ProjectAnimation project={project} newPosition={newPosition} />
         )}
      </div>
   );
}
