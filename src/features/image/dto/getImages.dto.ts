import type { GetImageDto } from "./getImage.dto";

export type GetImagesDto = {
  imagesCount: number;
  maxAllowed: number;
  images: GetImageDto[];
};
