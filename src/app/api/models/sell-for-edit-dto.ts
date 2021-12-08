/* tslint:disable */
/* eslint-disable */
import { Condition } from './condition';
import { PhotoDto } from './photo-dto';
import { Style } from './style';
export interface SellForEditDto {
  amount: number;
  brandId: number;
  categoryId: number;
  color: string;
  condition: Condition;
  description: string;
  designers?: null | Array<string>;
  hashTags: Array<string>;
  photos: Array<PhotoDto>;
  sizeId: number;
  style: Style;
  subCategoryId: number;
  title: string;
}
