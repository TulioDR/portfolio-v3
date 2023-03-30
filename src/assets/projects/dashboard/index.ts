import ProjectModel from "@/models/ProjectModel";
import dashboardImg from "./img/dashboard.png";
import dashboardTech from "./technologies";
import dashboardEnglish from "./translations/english";
import dashboardSpanish from "./translations/spanish";

const dashboard: ProjectModel = {
   title: "Admin Dashboard",
   img: dashboardImg,
   link: "dashboard",
   website: "https://admin-dashboard-concept.netlify.app/",
   repository: "https://github.com/TulioDR/dashboard-syncfusion-concept",
   technologies: dashboardTech,
   translations: {
      english: dashboardEnglish,
      spanish: dashboardSpanish,
   },
};

export default dashboard;
