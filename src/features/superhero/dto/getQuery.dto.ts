import type { QueryPaginationDto } from "../../../dto/queryPagination.dto";

export type GetQueryDto = {
  nickname?: string;
} & QueryPaginationDto;
