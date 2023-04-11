import ProjectModel from "@/models/ProjectModel";
import nftSiteImg from "./img/nft-site.jpg";
import nftSiteEnglish from "./translations/english";
import nftSiteSpanish from "./translations/spanish";

const nftSite: ProjectModel = {
   title: "NFT Site",
   img: nftSiteImg,
   link: "nft-site",
   website: "#",
   repository: "#",
   technologies: [],
   isFinished: false,
   translations: {
      english: nftSiteEnglish,
      spanish: nftSiteSpanish,
   },
};

export default nftSite;
