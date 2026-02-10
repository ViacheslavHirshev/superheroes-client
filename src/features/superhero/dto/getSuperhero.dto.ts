import type { GetImageDto } from "../../image/dto/getImage.dto";

export type GetSuperheroDto = {
  id: number;
  nickname: string;
  realName: string;
  originDescription: string;
  superpowers: string;
  catchPhrase: string;
  avatarUrl: string | null;
  images: GetImageDto[];
};
