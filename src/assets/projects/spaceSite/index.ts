import ProjectModel from "@/models/ProjectModel";
import spaceSiteImg from "./img/space-site.jpg";
import spaceSiteEnglish from "./translations/english";
import spaceSiteSpanish from "./translations/spanish";

const spaceSite: ProjectModel = {
   title: "Itinerantur",
   img: spaceSiteImg,
   link: "space-site",
   website: "#",
   repository: "#",
   technologies: [],
   isFinished: false,
   translations: {
      english: spaceSiteEnglish,
      spanish: spaceSiteSpanish,
   },
};

export default spaceSite;
