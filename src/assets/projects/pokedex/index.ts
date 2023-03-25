import ProjectModel from "@/models/ProjectModel";
import pokedexImg from "./img/pokedex.png";
import pokedexTech from "./technologies";

const pokedex: ProjectModel = {
   title: "Pokédex",
   img: pokedexImg,
   link: "pokedex",
   website: "https://film-organizer.vercel.app/",
   repository: "https://github.com/TulioDR/film-organizer-v2/",
   technologies: pokedexTech,
   translations: {
      english: "",
      spanish: "",
   },
};

export default pokedex;
