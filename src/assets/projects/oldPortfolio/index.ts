import ProjectModel from "@/models/ProjectModel";
import oldPortfolioImg from "./img/old-portfolio.png";
import spaceSiteEnglish from "../spaceSite/translations/english";
import spaceSiteSpanish from "../spaceSite/translations/spanish";

const oldPortfolio: ProjectModel = {
   title: "Old Portfolio",
   img: oldPortfolioImg,
   link: "old-portfolio",
   website: "#",
   repository: "#",
   technologies: [],
   isFinished: false,
   translations: {
      english: spaceSiteEnglish,
      spanish: spaceSiteSpanish,
   },
};

export default oldPortfolio;
