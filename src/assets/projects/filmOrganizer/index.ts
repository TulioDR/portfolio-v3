import ProjectModel from "@/models/ProjectModel";
import filmOrganizerImg from "./img/film-organizer.png";
import filmOrganizerTech from "./technologies";
import filmOrganizerEnglish from "./translations/english";
import filmOrganizerSpanish from "./translations/spanish";

const filmOrganizer: ProjectModel = {
   title: "Film Organizer",
   img: filmOrganizerImg,
   link: "film-organizer",
   website: "https://film-organizer.vercel.app/",
   repository: "https://github.com/TulioDR/film-organizer-v2/",
   technologies: filmOrganizerTech,
   isFinished: true,
   translations: {
      english: filmOrganizerEnglish,
      spanish: filmOrganizerSpanish,
   },
};

export default filmOrganizer;
