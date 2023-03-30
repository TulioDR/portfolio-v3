import Image, { StaticImageData } from "next/image";

type Props = {
   src: StaticImageData;
   alt: string;
   background?: boolean;
};

export default function ProjectImage({ src, alt, background }: Props) {
   return (
      <div className={`relative h-full ${background ? "w-screen" : "w-full"}`}>
         <Image
            src={src}
            alt={alt}
            layout="fill"
            objectFit="cover"
            objectPosition="top"
            className="brightness-[0.6]"
            priority
         />
      </div>
   );
}
