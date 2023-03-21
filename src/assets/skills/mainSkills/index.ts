import SkillModel from "@/models/SkillModel";

import htmlLogo from "./img/html.png";
import cssLogo from "./img/css.png";
import javascriptLogo from "./img/javascript.png";
import nextLogo from "./img/nextjs.png";
import reactLogo from "./img/react.png";
import reactRouterLogo from "./img/react-router.png";
import reduxLogo from "./img/redux.png";
import typescriptLogo from "./img/typescript.png";
import tailwindLogo from "./img/tailwind.svg";
import bootstrapLogo from "./img/bootstrap.png";
import gitLogo from "./img/git.png";
import prismaLogo from "./img/prisma.png";
import sassLogo from "./img/sass.png";
import supabaseLogo from "./img/supabase.png";
import npmLogo from "./img/npm.png";

const html: SkillModel = {
   name: "HTML",
   logo: htmlLogo,
   link: "https://developer.mozilla.org/en-US/docs/Web/HTML",
};
const css: SkillModel = {
   name: "CSS",
   logo: cssLogo,
   link: "https://developer.mozilla.org/en-US/docs/Web/CSS",
};
const javascript: SkillModel = {
   name: "Javascript",
   logo: javascriptLogo,
   link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
};
const nextJs: SkillModel = {
   name: "Next.js",
   logo: nextLogo,
   link: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
};
const react: SkillModel = {
   name: "React",
   logo: reactLogo,
   link: "https://reactjs.org/",
};
const reactRouter: SkillModel = {
   name: "React-Router",
   logo: reactRouterLogo,
   link: "",
};
const redux: SkillModel = {
   name: "Redux",
   logo: reduxLogo,
   link: "",
};
const tailwindcss: SkillModel = {
   name: "Tailwind CSS",
   logo: tailwindLogo,
   link: "https://tailwindcss.com/",
};
const typescript: SkillModel = {
   name: "Typescript",
   logo: typescriptLogo,
   link: "https://www.typescriptlang.org/",
};
const bootstrap: SkillModel = {
   name: "Bootstrap",
   logo: bootstrapLogo,
   link: "https://getbootstrap.com/",
};
const git: SkillModel = {
   name: "Git",
   logo: gitLogo,
   link: "",
};
const sass: SkillModel = {
   name: "Sass",
   logo: sassLogo,
   link: "",
};
const prisma: SkillModel = {
   name: "Prisma",
   logo: prismaLogo,
   link: "",
};
const supabase: SkillModel = {
   name: "Supabase",
   logo: supabaseLogo,
   link: "",
};
const npm: SkillModel = {
   name: "npm",
   logo: npmLogo,
   link: "https://www.npmjs.com/",
};

const mainSkills: SkillModel[] = [
   html,
   css,
   javascript,
   nextJs,
   react,
   reactRouter,
   redux,
   tailwindcss,
   typescript,
   bootstrap,
   git,
   sass,
   prisma,
   supabase,
   npm,
];
export default mainSkills;
