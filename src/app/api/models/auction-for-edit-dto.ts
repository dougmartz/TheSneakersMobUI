/* tslint:disable */
/* eslint-disable */
import { Condition } from './condition';
import { PhotoDto } from './photo-dto';
export interface AuctionForEditDto {
  color: string;
  condition: Condition;
  description: string;
  designers?: null | Array<string>;
  hashTags: Array<string>;
  photos: Array<PhotoDto>;
  sizeId: number;
}
