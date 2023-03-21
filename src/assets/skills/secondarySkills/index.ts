import SkillModel from "@/models/SkillModel";

import expressLogo from "./img/express.png";
import mongodbLogo from "./img/mongodb.png";
import nodeLogo from "./img/node.png";

const express: SkillModel = {
   name: "Express",
   logo: expressLogo,
   link: "",
};
const mongoDB: SkillModel = {
   name: "Mongo DB",
   logo: mongodbLogo,
   link: "",
};
const nodejs: SkillModel = {
   name: "Node.js",
   logo: nodeLogo,
   link: "",
};

const secondarySkills = [express, mongoDB, nodejs];
export default secondarySkills;
