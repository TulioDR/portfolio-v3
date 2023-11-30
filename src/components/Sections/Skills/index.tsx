import MainContainer from "@/components/MainContainer";

import SectionTitle from "../SectionTitle";
import SkillCard from "./SkillCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import SkillPagination from "./SkillPagination";

import "swiper/css/pagination";
import SkillCardsContainer from "./SkillCardsContainer";

import mainSkills from "@/assets/skills/mainSkills";
import secondarySkills from "@/assets/skills/secondarySkills";
import inProgressSkills from "@/assets/skills/inProgressSkills";
import useLanguageContext from "@/context/LanguageContext";
import SectionContainer from "../SectionContainer";

export default function SkillsSection() {
   const [activeIndex, setActiveIndex] = useState<number>(0);

   const { currentLanguage } = useLanguageContext();
   const { title, main, secondary, inProgress } = currentLanguage.skills;
   return (
      <SectionContainer lightBg>
         <div id="skills" className="bg-main-white w-full py-24">
            <MainContainer>
               <SectionTitle>{title}</SectionTitle>
            </MainContainer>
            <div className="mx-auto w-full px-5 sm:px-0 sm:w-[554px] md:w-[734px] lg:w-[974px] xl:w-[1154px] 2xl:[1334px]">
               <Swiper
                  onSlideChange={({ activeIndex }) =>
                     setActiveIndex(activeIndex)
                  }
                  style={{ display: "flex" }}
                  className="flex-col-reverse"
               >
                  <div className="flex space-x-3 sm:space-x-4 md:space-x-5 my-7 sm:pl-[14px]">
                     <SkillPagination activeIndex={activeIndex} index={0}>
                        {main}
                     </SkillPagination>
                     <SkillPagination activeIndex={activeIndex} index={1}>
                        {secondary}
                     </SkillPagination>
                     <SkillPagination activeIndex={activeIndex} index={2}>
                        {inProgress}
                     </SkillPagination>
                  </div>
                  <SwiperSlide>
                     <SkillCardsContainer>
                        {mainSkills.map(({ name, logo, link }) => (
                           <SkillCard
                              key={name}
                              name={name}
                              logo={logo}
                              link={link}
                           />
                        ))}
                     </SkillCardsContainer>
                  </SwiperSlide>
                  <SwiperSlide>
                     <SkillCardsContainer>
                        {secondarySkills.map(({ name, logo, link }) => (
                           <SkillCard
                              key={name}
                              name={name}
                              logo={logo}
                              link={link}
                           />
                        ))}
                     </SkillCardsContainer>
                  </SwiperSlide>
                  <SwiperSlide>
                     <SkillCardsContainer>
                        {inProgressSkills.map(({ name, logo, link }) => (
                           <SkillCard
                              key={name}
                              name={name}
                              logo={logo}
                              link={link}
                           />
                        ))}
                     </SkillCardsContainer>
                  </SwiperSlide>
               </Swiper>
            </div>
         </div>
      </SectionContainer>
   );
}
