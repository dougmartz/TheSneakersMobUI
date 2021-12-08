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

import { CategoryDetailDto } from '../models/category-detail-dto';

@Injectable({
  providedIn: 'root',
})
export class CategoryService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiCategoryGetCategoriesGet
   */
  static readonly ApiCategoryGetCategoriesGetPath = '/api/Category/GetCategories';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGetCategoriesGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetCategoriesGet$Plain$Response(params?: {
  }): Observable<StrictHttpResponse<CategoryDetailDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryGetCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryDetailDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGetCategoriesGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetCategoriesGet$Plain(params?: {
  }): Observable<CategoryDetailDto> {

    return this.apiCategoryGetCategoriesGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryDetailDto>) => r.body as CategoryDetailDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiCategoryGetCategoriesGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetCategoriesGet$Json$Response(params?: {
  }): Observable<StrictHttpResponse<CategoryDetailDto>> {

    const rb = new RequestBuilder(this.rootUrl, CategoryService.ApiCategoryGetCategoriesGetPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<CategoryDetailDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiCategoryGetCategoriesGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiCategoryGetCategoriesGet$Json(params?: {
  }): Observable<CategoryDetailDto> {

    return this.apiCategoryGetCategoriesGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<CategoryDetailDto>) => r.body as CategoryDetailDto)
    );
  }

}
