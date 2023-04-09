import ProjectModel from "@/models/ProjectModel";
import dashboard from "./dashboard";
import filmOrganizer from "./filmOrganizer";
import oldPortfolio from "./oldPortfolio";
import pokedex from "./pokedex";
import nftSite from "./nftSite";
import bootstrapSite from "./bootstrapSite";
import spaceSite from "./spaceSite";

const projects: ProjectModel[] = [
   filmOrganizer,
   pokedex,
   dashboard,
   oldPortfolio,
   nftSite,
   bootstrapSite,
   spaceSite,
];
export default projects;
