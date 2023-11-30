import JumboImgContainer from "./JumboImgContainer";
import JumboImg from "./JumboImg";
import PositionModel from "@/models/PositionModel";
import ProjectModel from "@/models/ProjectModel";
import JumboBackground from "./JumboBackground";
import JumboTitle from "./JumboTitle";
import { AnimationControls } from "framer-motion";
import JumbotronContainer from "./JumbotronContainer";

type Props = {
   position: PositionModel | null;
   project: ProjectModel;
   tiltEnable: boolean;
   jumboBackgroundControls: AnimationControls;
   jumboImgControls: AnimationControls;
   jumboTitleControls: AnimationControls;
};

export default function Jumbotron({
   position,
   project,
   tiltEnable,
   jumboBackgroundControls,
   jumboImgControls,
   jumboTitleControls,
}: Props) {
   return (
      <JumbotronContainer tiltEnable={tiltEnable}>
         <JumboBackground animationControls={jumboBackgroundControls} />
         <div
            style={{
               transform: tiltEnable ? "translateZ(50px)" : undefined,
            }}
            className="flex flex-col gap-5 items-center w-full p-5 md:p-10 duration-300"
         >
            <JumboImgContainer>
               {position && (
                  <JumboImg
                     animationControls={jumboImgControls}
                     project={project}
                     position={position}
                  />
               )}
            </JumboImgContainer>
            <JumboTitle animationControls={jumboTitleControls}>
               {project.title}
            </JumboTitle>
         </div>
      </JumbotronContainer>
   );
}
