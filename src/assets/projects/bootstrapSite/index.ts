import ProjectModel from "@/models/ProjectModel";
import bootstrapSiteImg from "./img/bootstrap-site.jpg";
import bootstrapSiteEnglish from "./translations/english";
import bootstrapSiteSpanish from "./translations/spanish";

const bootstrapSite: ProjectModel = {
   title: "Bootstrap Site",
   img: bootstrapSiteImg,
   link: "bootstrap-site",
   website: "#",
   repository: "#",
   technologies: [],
   isFinished: false,
   translations: {
      english: bootstrapSiteEnglish,
      spanish: bootstrapSiteSpanish,
   },
};

export default bootstrapSite;
