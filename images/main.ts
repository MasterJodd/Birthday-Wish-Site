import { StaticImageData } from "next/image";
import cake from "./cake.webp";
import ketki from "./ketki.webp";
export{
 cake,
 ketki,
}

export type ImageAssets = {
 cake: StaticImageData;
 ketki: StaticImageData;
};

const Images: ImageAssets = {
 cake,
 ketki: ketki,
}