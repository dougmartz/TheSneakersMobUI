/* tslint:disable */
/* eslint-disable */
import { GetFollowerDto } from './get-follower-dto';
export interface GetProfileDto {
  amountOfBuys?: number;
  amountOfSells?: number;
  avarageReview?: number;
  country?: null | string;
  email?: null | string;
  firstName?: null | string;
  followers?: null | Array<GetFollowerDto>;
  id?: number;
  lastName?: null | string;
  photoUrl?: null | string;
  registrationDate?: null | string;
  userName?: null | string;
}
