import MainContainer from "@/components/MainContainer";

import SectionTitle from "../SectionTitle";
import SkillCard from "./SkillCard";

import { Swiper, SwiperSlide } from "swiper/react";
import { useState } from "react";
import SkillPagination from "./SkillPagination";

import "swiper/css/pagination";
import SkillCardsContainer from "./SkillCardsContainer";
import mainSkills from "@/assets/skills/mainSkills/mainSkills";
import secondarySkills from "@/assets/skills/secondarySkills/secondarySkills";
export default function SkillsSection() {
   const [activeIndex, setActiveIndex] = useState<number>(0);
   return (
      <div className="bg-gray-200 w-full py-24">
         <MainContainer>
            <SectionTitle>Skills</SectionTitle>
         </MainContainer>
         <div className="mx-auto w-full px-5 sm:px-0 sm:w-[554px] md:w-[734px] lg:w-[974px] xl:w-[1154px] 2xl:[1334px]">
            <Swiper
               onSlideChange={({ activeIndex }) => setActiveIndex(activeIndex)}
               style={{ display: "flex" }}
               className="flex-col-reverse"
            >
               <div className="flex space-x-5 my-7 pl-[14px]">
                  <SkillPagination activeIndex={activeIndex} index={0}>
                     Main
                  </SkillPagination>
                  <SkillPagination activeIndex={activeIndex} index={1}>
                     Secondary
                  </SkillPagination>
                  <SkillPagination activeIndex={activeIndex} index={2}>
                     In progress
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
            </Swiper>
         </div>
      </div>
   );
}
