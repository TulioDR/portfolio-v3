import SkillModel from "@/models/SkillModel";

import figmaLogo from "./img/figma.png";
import threejsLogo from "./img/threejs.png";

export const figma: SkillModel = {
   name: "Figma",
   logo: figmaLogo,
   link: "https://www.figma.com/",
};
export const threejs: SkillModel = {
   name: "Three.js",
   logo: threejsLogo,
   link: "https://threejs.org/",
};

const inProgressSkills = [figma, threejs];
export default inProgressSkills;
