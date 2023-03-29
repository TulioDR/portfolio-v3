import { StaticImageData } from "next/image";

export default interface ProjectAnimationModel {
   top: number;
   left: number;
   height: number;
   width: number;
   link: string;
   img: StaticImageData;
}
