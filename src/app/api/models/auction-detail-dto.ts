/* tslint:disable */
/* eslint-disable */
import { PhotoDto } from './photo-dto';
export interface AuctionDetailDto {
  brand?: null | string;
  category?: null | string;
  color?: null | string;
  condition?: null | string;
  description?: null | string;
  designers?: null | Array<string>;
  directBuyPrize?: null | string;
  expirationDate?: null | string;
  gender?: null | string;
  hashTags?: null | Array<string>;
  id?: number;
  initialPrize?: null | string;
  lastBidAmount?: null | string;
  lastBidUserName?: null | string;
  likes?: number;
  numberOfSells?: number;
  photos?: null | Array<PhotoDto>;
  size?: null | string;
  title?: null | string;
  userCountry?: null | string;
  userGeneralFeedback?: number;
  userName?: null | string;
  userProfilePhoto?: null | string;
}
