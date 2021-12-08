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

import { BuyDto } from '../models/buy-dto';
import { PostFeedbackDto } from '../models/post-feedback-dto';
import { ReportSellDto } from '../models/report-sell-dto';
import { SellDetailDto } from '../models/sell-detail-dto';
import { SellForCreationDto } from '../models/sell-for-creation-dto';
import { SellForEditDto } from '../models/sell-for-edit-dto';
import { SellSummaryDtoPagedResponse } from '../models/sell-summary-dto-paged-response';

@Injectable({
  providedIn: 'root',
})
export class SellService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiSellCreatePost
   */
  static readonly ApiSellCreatePostPath = '/api/Sell/Create';

  /**
   * Sample request:
   *             
   *     POST api/Sell/Create
   *     {
   *         "title": "Great offer",
   *         "categoryId": 1,
   *         "subCategoryId": 1,
   *         "style": "Vintage",
   *         "brandId": 1,
   *         "designers": [
   *             "string"
   *         ],
   *         "sizeId": 1,
   *         "color": "white",
   *         "condition": "New",
   *         "description": "Great shoes",
   *         "amount": 10,
   *         "currency": "Dollar",
   *         "photos": [
   *             {
   *             "title": "My Photo",
   *             "url": "photo.com"
   *             }
   *         ],
   *         "hashTags": [
   *             "#great","sneakers","BuyThem"
   *         ],
   *         "gender": "Male",
   *         "acceptCoupons": false
   *     }
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellCreatePost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSellCreatePost$Response(params?: {
    body?: SellForCreationDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SellService.ApiSellCreatePostPath, 'post');
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
   *     POST api/Sell/Create
   *     {
   *         "title": "Great offer",
   *         "categoryId": 1,
   *         "subCategoryId": 1,
   *         "style": "Vintage",
   *         "brandId": 1,
   *         "designers": [
   *             "string"
   *         ],
   *         "sizeId": 1,
   *         "color": "white",
   *         "condition": "New",
   *         "description": "Great shoes",
   *         "amount": 10,
   *         "currency": "Dollar",
   *         "photos": [
   *             {
   *             "title": "My Photo",
   *             "url": "photo.com"
   *             }
   *         ],
   *         "hashTags": [
   *             "#great","sneakers","BuyThem"
   *         ],
   *         "gender": "Male",
   *         "acceptCoupons": false
   *     }
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSellCreatePost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSellCreatePost(params?: {
    body?: SellForCreationDto
  }): Observable<void> {

    return this.apiSellCreatePost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSellEditIdPut
   */
  static readonly ApiSellEditIdPutPath = '/api/Sell/Edit/{id}';

  /**
   * Sample request:
   *             
   *     PUT api/Sell/Edit/id
   *     {
   *         "title": "Edit Sell",
   *         "categoryId": 2,
   *         "subCategoryId": 102,
   *         "style": "Vintage",
   *         "brandId": 1,
   *         "designers": [
   *             "Collaborator1"
   *         ],
   *         "sizeId": 101,
   *         "color": "Black",
   *         "condition": "OftenUsed",
   *         "description": "This sell has been edited",
   *         "amount": 750,
   *         "photos": [
   *             {
   *             "title": "Photo1",
   *             "url": "photo1.com"
   *             }
   *         ],
   *         "hashTags": [
   *             "edit","is","awesome"
   *         ]
   *     }
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellEditIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSellEditIdPut$Response(params: {
    id: number;
    body?: SellForEditDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SellService.ApiSellEditIdPutPath, 'put');
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
   *     PUT api/Sell/Edit/id
   *     {
   *         "title": "Edit Sell",
   *         "categoryId": 2,
   *         "subCategoryId": 102,
   *         "style": "Vintage",
   *         "brandId": 1,
   *         "designers": [
   *             "Collaborator1"
   *         ],
   *         "sizeId": 101,
   *         "color": "Black",
   *         "condition": "OftenUsed",
   *         "description": "This sell has been edited",
   *         "amount": 750,
   *         "photos": [
   *             {
   *             "title": "Photo1",
   *             "url": "photo1.com"
   *             }
   *         ],
   *         "hashTags": [
   *             "edit","is","awesome"
   *         ]
   *     }
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSellEditIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSellEditIdPut(params: {
    id: number;
    body?: SellForEditDto
  }): Observable<void> {

    return this.apiSellEditIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSellDeleteIdDelete
   */
  static readonly ApiSellDeleteIdDeletePath = '/api/Sell/Delete/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellDeleteIdDelete()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellDeleteIdDelete$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SellService.ApiSellDeleteIdDeletePath, 'delete');
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
   * To access the full response (for headers, for example), `apiSellDeleteIdDelete$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellDeleteIdDelete(params: {
    id: number;
  }): Observable<void> {

    return this.apiSellDeleteIdDelete$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSellGetSellsGet
   */
  static readonly ApiSellGetSellsGetPath = '/api/Sell/GetSells';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellGetSellsGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellGetSellsGet$Plain$Response(params?: {
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
  }): Observable<StrictHttpResponse<SellSummaryDtoPagedResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SellService.ApiSellGetSellsGetPath, 'get');
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
        return r as StrictHttpResponse<SellSummaryDtoPagedResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSellGetSellsGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellGetSellsGet$Plain(params?: {
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
  }): Observable<SellSummaryDtoPagedResponse> {

    return this.apiSellGetSellsGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SellSummaryDtoPagedResponse>) => r.body as SellSummaryDtoPagedResponse)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellGetSellsGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellGetSellsGet$Json$Response(params?: {
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
  }): Observable<StrictHttpResponse<SellSummaryDtoPagedResponse>> {

    const rb = new RequestBuilder(this.rootUrl, SellService.ApiSellGetSellsGetPath, 'get');
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
        return r as StrictHttpResponse<SellSummaryDtoPagedResponse>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSellGetSellsGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellGetSellsGet$Json(params?: {
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
  }): Observable<SellSummaryDtoPagedResponse> {

    return this.apiSellGetSellsGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SellSummaryDtoPagedResponse>) => r.body as SellSummaryDtoPagedResponse)
    );
  }

  /**
   * Path part for operation apiSellGetIdGet
   */
  static readonly ApiSellGetIdGetPath = '/api/Sell/Get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellGetIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellGetIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<SellDetailDto>> {

    const rb = new RequestBuilder(this.rootUrl, SellService.ApiSellGetIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SellDetailDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSellGetIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellGetIdGet$Plain(params: {
    id: number;
  }): Observable<SellDetailDto> {

    return this.apiSellGetIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<SellDetailDto>) => r.body as SellDetailDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellGetIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellGetIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<SellDetailDto>> {

    const rb = new RequestBuilder(this.rootUrl, SellService.ApiSellGetIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<SellDetailDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSellGetIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellGetIdGet$Json(params: {
    id: number;
  }): Observable<SellDetailDto> {

    return this.apiSellGetIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<SellDetailDto>) => r.body as SellDetailDto)
    );
  }

  /**
   * Path part for operation apiSellBuyIdPost
   */
  static readonly ApiSellBuyIdPostPath = '/api/Sell/Buy/{id}';

  /**
   * Creates a Payment Intent in Stripe and returns a client secret so that the flow can be completed on the client.
   *
   *
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellBuyIdPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSellBuyIdPost$Response(params: {
    id: number;
    body?: BuyDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SellService.ApiSellBuyIdPostPath, 'post');
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
   * Creates a Payment Intent in Stripe and returns a client secret so that the flow can be completed on the client.
   *
   *
   *
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiSellBuyIdPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSellBuyIdPost(params: {
    id: number;
    body?: BuyDto
  }): Observable<void> {

    return this.apiSellBuyIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSellFeedbackIdPost
   */
  static readonly ApiSellFeedbackIdPostPath = '/api/Sell/Feedback/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellFeedbackIdPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSellFeedbackIdPost$Response(params: {
    id: number;
    body?: PostFeedbackDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SellService.ApiSellFeedbackIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSellFeedbackIdPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSellFeedbackIdPost(params: {
    id: number;
    body?: PostFeedbackDto
  }): Observable<void> {

    return this.apiSellFeedbackIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSellReportIdPost
   */
  static readonly ApiSellReportIdPostPath = '/api/Sell/Report/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellReportIdPost()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSellReportIdPost$Response(params: {
    id: number;
    body?: ReportSellDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SellService.ApiSellReportIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSellReportIdPost$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiSellReportIdPost(params: {
    id: number;
    body?: ReportSellDto
  }): Observable<void> {

    return this.apiSellReportIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiSellLikeIdPost
   */
  static readonly ApiSellLikeIdPostPath = '/api/Sell/Like/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiSellLikeIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellLikeIdPost$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, SellService.ApiSellLikeIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiSellLikeIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiSellLikeIdPost(params: {
    id: number;
  }): Observable<void> {

    return this.apiSellLikeIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
