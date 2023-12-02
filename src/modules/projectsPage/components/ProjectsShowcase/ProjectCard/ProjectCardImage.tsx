import Image, { StaticImageData } from "next/image";

type Props = {
   src: StaticImageData;
   alt: string;
};

export default function ProjectCardImage({ src, alt }: Props) {
   return (
      <div className="w-full h-full relative">
         <Image
            src={src}
            alt={alt}
            fill
            sizes="100%"
            className="object-cover"
            priority
         />
      </div>
   );
}
