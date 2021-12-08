/* tslint:disable */
/* eslint-disable */
import { Condition } from './condition';
import { Currency } from './currency';
import { Gender } from './gender';
import { PhotoDto } from './photo-dto';
import { Style } from './style';
export interface AuctionForCreationDto {
  brandId: number;
  categoryId: number;
  color: string;
  condition: Condition;
  currency: Currency;
  description: string;
  designers?: null | Array<string>;
  directBuyPrize?: null | number;
  expireDate: string;
  gender: Gender;
  hashTags: Array<string>;
  initialPrize: number;
  isDirectBuyAllowed: boolean;
  photos: Array<PhotoDto>;
  sizeId: number;
  style: Style;
  subCategoryId: number;
  title: string;
}
