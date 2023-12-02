import { StaticImageData } from "next/image";
import SkillModel from "./SkillModel";

export default interface ProjectModel {
   title: string;
   img: StaticImageData;
   link: string;
   website: string;
   repository: string;
   technologies: SkillModel[];
   isFinished: boolean;
   translations: {
      english: ProjectTranslations;
      spanish: ProjectTranslations;
   };
}

export interface ProjectTranslations {
   description: string;
   role: string;
   date: string;
   overview: string;
   features: {
      name: string;
      description: string;
      img: StaticImageData;
   }[];
}

export type LayoutModel = "list" | "cascade" | "carousel";
