import { ProjectTranslations } from "@/models/ProjectModel";
import DescriptionTitle from "./DescriptionTitle";

type Props = {
   currentLan: ProjectTranslations;
};

export default function Description({ currentLan }: Props) {
   const { date, role, overview } = currentLan;
   return (
      <div className="sm:flex justify-between space-y-5 sm:space-y-0 sm:space-x-10">
         <div className="space-y-3 sm:space-y-5">
            <DescriptionTitle>Role</DescriptionTitle>
            <div>{role}</div>
         </div>
         <div className="space-y-3 sm:space-y-5">
            <DescriptionTitle>Date</DescriptionTitle>
            <div>{date}</div>
         </div>
         <div className="space-y-3 sm:space-y-5">
            <DescriptionTitle>Overview</DescriptionTitle>
            <div>{overview}</div>
         </div>
      </div>
   );
}
