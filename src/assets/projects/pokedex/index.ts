import ProjectModel from "@/models/ProjectModel";
import pokedexImg from "./img/pokedex.jpeg";
import pokedexTech from "./technologies";
import pokedexEnglish from "./translations/english";
import pokedexSpanish from "./translations/spanish";

const pokedex: ProjectModel = {
   title: "Pokédex",
   img: pokedexImg,
   link: "pokedex",
   website: "https://pokedex-animated.vercel.app/",
   repository: "https://github.com/TulioDR/pokedex",
   technologies: pokedexTech,
   isFinished: true,
   translations: {
      english: pokedexEnglish,
      spanish: pokedexSpanish,
   },
};

export default pokedex;
