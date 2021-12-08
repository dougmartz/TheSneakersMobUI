/* tslint:disable */
/* eslint-disable */
import { SellSummaryDto } from './sell-summary-dto';
export interface SellSummaryDtoPagedResponse {
  currentPage?: number;
  data?: null | Array<SellSummaryDto>;
  hasNext?: boolean;
  hasPrevious?: boolean;
  pageSize?: number;
  totalCount?: number;
  totalPages?: number;
}
