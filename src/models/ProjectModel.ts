import { StaticImageData } from "next/image";
import SkillModel from "./SkillModel";

export default interface ProjectModel {
   title: string;
   img: StaticImageData;
   link: string;
   website: string;
   repository: string;
   technologies: SkillModel[];
   translations: any;
}
