/* tslint:disable */
/* eslint-disable */
import { BidSummaryDto } from './bid-summary-dto';
export interface AuctionSummaryDto {
  bids?: null | Array<BidSummaryDto>;
  brand?: null | string;
  condition?: null | string;
  currentPrize?: null | string;
  description?: null | string;
  directBuyPrize?: null | string;
  id?: number;
  initialPrize?: null | string;
  mainPictureUrl?: null | string;
  size?: null | string;
  title?: null | string;
}
