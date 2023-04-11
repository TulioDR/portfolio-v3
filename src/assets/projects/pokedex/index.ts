import ProjectModel from "@/models/ProjectModel";
import pokedexImg from "./img/pokedex.png";
import pokedexTech from "./technologies";
import pokedexEnglish from "./translations/english";
import pokedexSpanish from "./translations/spanish";

const pokedex: ProjectModel = {
   title: "Pokédex",
   img: pokedexImg,
   link: "pokedex",
   website: "https://film-organizer.vercel.app/",
   repository: "https://github.com/TulioDR/film-organizer-v2/",
   technologies: pokedexTech,
   isFinished: true,
   translations: {
      english: pokedexEnglish,
      spanish: pokedexSpanish,
   },
};

export default pokedex;
