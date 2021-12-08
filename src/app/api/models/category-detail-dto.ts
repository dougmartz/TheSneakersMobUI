/* tslint:disable */
/* eslint-disable */
import { SizeDetailDto } from './size-detail-dto';
import { SubcategoryDetailDto } from './subcategory-detail-dto';
export interface CategoryDetailDto {
  id?: number;
  name?: null | string;
  sizes?: null | Array<SizeDetailDto>;
  subcategories?: null | Array<SubcategoryDetailDto>;
}
