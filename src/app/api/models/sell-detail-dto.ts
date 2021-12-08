/* tslint:disable */
/* eslint-disable */
import { PhotoDto } from './photo-dto';
export interface SellDetailDto {
  acceptCoupons?: boolean;
  brand?: null | string;
  category?: null | string;
  color?: null | string;
  condition?: null | string;
  description?: null | string;
  designers?: null | Array<string>;
  gender?: null | string;
  hashTags?: null | Array<string>;
  id?: number;
  likes?: number;
  numberOfSells?: number;
  photos?: null | Array<PhotoDto>;
  price?: null | string;
  size?: null | string;
  title?: null | string;
  userCountry?: null | string;
  userGeneralFeedback?: number;
  userName?: null | string;
  userProfilePhoto?: null | string;
}
