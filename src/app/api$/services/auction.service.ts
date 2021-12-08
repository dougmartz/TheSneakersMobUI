/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';

import { AuctionDetailDto } from '../models/auction-detail-dto';
import { AuctionForCreationDto } from '../models/auction-for-creation-dto';
import { AuctionForEditDto } from '../models/auction-for-edit-dto';
import { AuctionSummaryDtoPagedResponse } from '../models/auction-summary-dto-paged-response';
import { BidDto } from '../models/bid-dto';
import { PostFeedbackDto } from '../models/post-feedback-dto';
import { ReportAuctionDto } from '../models/report-auction-dto';

@Injectable({
  providedIn: 'root',
})
export class AuctionService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiAuctionCreatePost
   */
  static readonly ApiAuctionCreatePostPath = '/api/Auction/Create';

  /**
   * Sample request:
   *             
   *     POST api/Auction/Create
   *     {
   *         "title": "First Auction",
   *         "categoryId": 1,
   *         "subCategoryId": 1,
   *         "style": "Vintage",
   *         "brandId": 1,
   *         "sizeId": 1,
   *         "color": "blue",
   *         "condition": "New",
   *         "description": "First Auction Description",
   *         "initialPrize": 10,
   *         "currency": "Dollar",
   *         "isDirectBuyAllowed": true,
   *         "directBuyPrize": 20,
   *         "expireDate": "04/20/2020",
   *         "photos": [
   *           {
   *             "title": "My photo",
   *             "url": "http://myphoto.com"
   *           }
   *         ],
   *         "hashTags": [
   *           "awesome","auction","BidNow"
   *         ],
   *         "gender": "Male "
   *     }
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionCreatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuctionCreatePost$Response(params?: {
    body?: AuctionForCreationDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionService.ApiAuctionCreatePostPath, 'post');
    if (params) {
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Sample request:
   *             
   *     POST api/Auction/Create
   *     {
   *         "title": "First Auction",
   *         "categoryId": 1,
   *         "subCategoryId": 1,
   *         "style": "Vintage",
   *         "brandId": 1,
   *         "sizeId": 1,
   *         "color": "blue",
   *         "condition": "New",
   *         "description": "First Auction Description",
   *         "initialPrize": 10,
   *         "currency": "Dollar",
   *         "isDirectBuyAllowed": true,
   *         "directBuyPrize": 20,
   *         "expireDate": "04/20/2020",
   *         "photos": [
   *           {
   *             "title": "My photo",
   *             "url": "http://myphoto.com"
   *           }
   *         ],
   *         "hashTags": [
   *           "awesome","auction","BidNow"
   *         ],
   *         "gender": "Male "
   *     }
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionCreatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuctionCreatePost(params?: {
    body?: AuctionForCreationDto
  }): Observable<void> {

    return this.apiAuctionCreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAuctionEditIdPut
   */
  static readonly ApiAuctionEditIdPutPath = '/api/Auction/Edit/{id}';

  /**
   * Sample request:
   *             
   *     PUT api/Auction/Edit/id
   *     {
   *       "designers": [
   *         "designer1", "designer2"
   *       ],
   *       "sizeId": 2,
   *       "color": "white",
   *       "condition": "SemiNew",
   *       "description": "This auction has been edited",
   *       "photos": [
   *         {
   *           "title": "MyPhoto",
   *           "url": "https://editedphoto.com"
   *         }
   *       ],
   *       "hashTags": [
   *         "editing","is","awesome"
   *       ]
   *     }
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionEditIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuctionEditIdPut$Response(params: {
    id: number;
    body?: AuctionForEditDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionService.ApiAuctionEditIdPutPath, 'put');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Sample request:
   *             
   *     PUT api/Auction/Edit/id
   *     {
   *       "designers": [
   *         "designer1", "designer2"
   *       ],
   *       "sizeId": 2,
   *       "color": "white",
   *       "condition": "SemiNew",
   *       "description": "This auction has been edited",
   *       "photos": [
   *         {
   *           "title": "MyPhoto",
   *           "url": "https://editedphoto.com"
   *         }
   *       ],
   *       "hashTags": [
   *         "editing","is","awesome"
   *       ]
   *     }
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionEditIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuctionEditIdPut(params: {
    id: number;
    body?: AuctionForEditDto
  }): Observable<void> {

    return this.apiAuctionEditIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAuctionDeleteIdDelete
   */
  static readonly ApiAuctionDeleteIdDeletePath = '/api/Auction/Delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionDeleteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionDeleteIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionService.ApiAuctionDeleteIdDeletePath, 'delete');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionDeleteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionDeleteIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiAuctionDeleteIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAuctionGetAuctionsGet
   */
  static readonly ApiAuctionGetAuctionsGetPath = '/api/Auction/GetAuctions';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionGetAuctionsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionGetAuctionsGet$Plain$Response(params?: {
    Category?: string;
    Subcategoy?: string;
    Style?: string;
    Brand?: string;
    Size?: string;
    Condition?: string;
    Country?: string;
    Gender?: string;
    SearchQuery?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<StrictHttpResponse<AuctionSummaryDtoPagedResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionService.ApiAuctionGetAuctionsGetPath, 'get');
    if (params) {
      rb.query('Category', params.Category, {});
      rb.query('Subcategoy', params.Subcategoy, {});
      rb.query('Style', params.Style, {});
      rb.query('Brand', params.Brand, {});
      rb.query('Size', params.Size, {});
      rb.query('Condition', params.Condition, {});
      rb.query('Country', params.Country, {});
      rb.query('Gender', params.Gender, {});
      rb.query('SearchQuery', params.SearchQuery, {});
      rb.query('PageNumber', params.PageNumber, {});
      rb.query('PageSize', params.PageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuctionSummaryDtoPagedResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionGetAuctionsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionGetAuctionsGet$Plain(params?: {
    Category?: string;
    Subcategoy?: string;
    Style?: string;
    Brand?: string;
    Size?: string;
    Condition?: string;
    Country?: string;
    Gender?: string;
    SearchQuery?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<AuctionSummaryDtoPagedResponse> {

    return this.apiAuctionGetAuctionsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AuctionSummaryDtoPagedResponse>) => r.body as AuctionSummaryDtoPagedResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionGetAuctionsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionGetAuctionsGet$Json$Response(params?: {
    Category?: string;
    Subcategoy?: string;
    Style?: string;
    Brand?: string;
    Size?: string;
    Condition?: string;
    Country?: string;
    Gender?: string;
    SearchQuery?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<StrictHttpResponse<AuctionSummaryDtoPagedResponse>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionService.ApiAuctionGetAuctionsGetPath, 'get');
    if (params) {
      rb.query('Category', params.Category, {});
      rb.query('Subcategoy', params.Subcategoy, {});
      rb.query('Style', params.Style, {});
      rb.query('Brand', params.Brand, {});
      rb.query('Size', params.Size, {});
      rb.query('Condition', params.Condition, {});
      rb.query('Country', params.Country, {});
      rb.query('Gender', params.Gender, {});
      rb.query('SearchQuery', params.SearchQuery, {});
      rb.query('PageNumber', params.PageNumber, {});
      rb.query('PageSize', params.PageSize, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuctionSummaryDtoPagedResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionGetAuctionsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionGetAuctionsGet$Json(params?: {
    Category?: string;
    Subcategoy?: string;
    Style?: string;
    Brand?: string;
    Size?: string;
    Condition?: string;
    Country?: string;
    Gender?: string;
    SearchQuery?: string;
    PageNumber?: number;
    PageSize?: number;
  }): Observable<AuctionSummaryDtoPagedResponse> {

    return this.apiAuctionGetAuctionsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AuctionSummaryDtoPagedResponse>) => r.body as AuctionSummaryDtoPagedResponse)
    );
  }

  /**
   * Path part for operation apiAuctionGetIdGet
   */
  static readonly ApiAuctionGetIdGetPath = '/api/Auction/Get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionGetIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionGetIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<AuctionDetailDto>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionService.ApiAuctionGetIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuctionDetailDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionGetIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionGetIdGet$Plain(params: {
    id: number;
  }): Observable<AuctionDetailDto> {

    return this.apiAuctionGetIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<AuctionDetailDto>) => r.body as AuctionDetailDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionGetIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionGetIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<AuctionDetailDto>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionService.ApiAuctionGetIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<AuctionDetailDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionGetIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionGetIdGet$Json(params: {
    id: number;
  }): Observable<AuctionDetailDto> {

    return this.apiAuctionGetIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<AuctionDetailDto>) => r.body as AuctionDetailDto)
    );
  }

  /**
   * Path part for operation apiAuctionDirectBuyIdPost
   */
  static readonly ApiAuctionDirectBuyIdPostPath = '/api/Auction/DirectBuy/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionDirectBuyIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionDirectBuyIdPost$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionService.ApiAuctionDirectBuyIdPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionDirectBuyIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionDirectBuyIdPost(params: {
    id: number;
  }): Observable<void> {

    return this.apiAuctionDirectBuyIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAuctionBidIdPost
   */
  static readonly ApiAuctionBidIdPostPath = '/api/Auction/Bid/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionBidIdPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuctionBidIdPost$Response(params: {
    id: number;
    body?: BidDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionService.ApiAuctionBidIdPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionBidIdPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuctionBidIdPost(params: {
    id: number;
    body?: BidDto
  }): Observable<void> {

    return this.apiAuctionBidIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAuctionFeedbackIdPost
   */
  static readonly ApiAuctionFeedbackIdPostPath = '/api/Auction/Feedback/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionFeedbackIdPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuctionFeedbackIdPost$Response(params: {
    id: number;
    body?: PostFeedbackDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionService.ApiAuctionFeedbackIdPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionFeedbackIdPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuctionFeedbackIdPost(params: {
    id: number;
    body?: PostFeedbackDto
  }): Observable<void> {

    return this.apiAuctionFeedbackIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAuctionReportIdPost
   */
  static readonly ApiAuctionReportIdPostPath = '/api/Auction/Report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionReportIdPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuctionReportIdPost$Response(params: {
    id: number;
    body?: ReportAuctionDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionService.ApiAuctionReportIdPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
      rb.body(params.body, 'application/*+json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionReportIdPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiAuctionReportIdPost(params: {
    id: number;
    body?: ReportAuctionDto
  }): Observable<void> {

    return this.apiAuctionReportIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiAuctionLikeIdPost
   */
  static readonly ApiAuctionLikeIdPostPath = '/api/Auction/Like/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiAuctionLikeIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionLikeIdPost$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, AuctionService.ApiAuctionLikeIdPostPath, 'post');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiAuctionLikeIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiAuctionLikeIdPost(params: {
    id: number;
  }): Observable<void> {

    return this.apiAuctionLikeIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
