/* tslint:disable */
/* eslint-disable */
import { AuctionSummaryDto } from './auction-summary-dto';
export interface AuctionSummaryDtoPagedResponse {
  currentPage?: number;
  data?: null | Array<AuctionSummaryDto>;
  hasNext?: boolean;
  hasPrevious?: boolean;
  pageSize?: number;
  totalCount?: number;
  totalPages?: number;
}
