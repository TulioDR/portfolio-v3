import SkillModel from "@/models/SkillModel";

import mainSkills from "./mainSkills/mainSkills";
import secondarySkills from "./secondarySkills/secondarySkills";

const allSkills: SkillModel[] = mainSkills.concat(secondarySkills);
export default allSkills;
