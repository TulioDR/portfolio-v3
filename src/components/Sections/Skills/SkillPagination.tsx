import { useSwiper } from "swiper/react";

type Props = {
   children: React.ReactNode;
   activeIndex: number;
   index: number;
};

export default function SkillPagination({
   children,
   activeIndex,
   index,
}: Props) {
   const swiper = useSwiper();
   const handleClick = () => {
      swiper.slideTo(index);
   };
   return (
      <span
         onClick={handleClick}
         className={`cursor-pointer text-sm sm:text-base md:text-2xl font-semibold duration-200 ${
            activeIndex === index ? "text-black" : "text-gray-400"
         }`}
      >
         {children}
      </span>
   );
}
