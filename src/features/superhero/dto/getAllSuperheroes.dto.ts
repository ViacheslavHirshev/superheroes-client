import type { GetSuperheroDto } from "./getSuperhero.dto";

export type GetAllSuperheroesDto = {
  page: number;
  isFirst: boolean;
  isLast: boolean;
  limit: number;
  totalItems: number;
  totalPages: number;
  superheroes: Partial<GetSuperheroDto>[];
};
