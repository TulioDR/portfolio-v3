import ProjectModel from "@/models/ProjectModel";
import neptuneDesignsImg from "./img/neptune-designs.jpg";
import bootstrapSiteEnglish from "./translations/english";
import bootstrapSiteSpanish from "./translations/spanish";

const bootstrapSite: ProjectModel = {
   title: "Neptune Designs",
   img: neptuneDesignsImg,
   link: "neptune-designs",
   website: "https://neptune-desings.netlify.app/",
   repository: "https://github.com/TulioDR/neptune-designs",
   technologies: [],
   isFinished: false,
   translations: {
      english: bootstrapSiteEnglish,
      spanish: bootstrapSiteSpanish,
   },
};

export default bootstrapSite;
