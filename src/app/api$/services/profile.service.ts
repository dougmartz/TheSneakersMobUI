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

import { EditProfileDto } from '../models/edit-profile-dto';
import { GetProfileDto } from '../models/get-profile-dto';

@Injectable({
  providedIn: 'root',
})
export class ProfileService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiProfileGetIdGet
   */
  static readonly ApiProfileGetIdGetPath = '/api/Profile/Get/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileGetIdGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGetIdGet$Plain$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<GetProfileDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.ApiProfileGetIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetProfileDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProfileGetIdGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGetIdGet$Plain(params: {
    id: number;
  }): Observable<GetProfileDto> {

    return this.apiProfileGetIdGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<GetProfileDto>) => r.body as GetProfileDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileGetIdGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGetIdGet$Json$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<GetProfileDto>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.ApiProfileGetIdGetPath, 'get');
    if (params) {
      rb.path('id', params.id, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<GetProfileDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiProfileGetIdGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileGetIdGet$Json(params: {
    id: number;
  }): Observable<GetProfileDto> {

    return this.apiProfileGetIdGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<GetProfileDto>) => r.body as GetProfileDto)
    );
  }

  /**
   * Path part for operation apiProfileEditIdPut
   */
  static readonly ApiProfileEditIdPutPath = '/api/Profile/Edit/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileEditIdPut()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfileEditIdPut$Response(params: {
    id: number;
    body?: EditProfileDto
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.ApiProfileEditIdPutPath, 'put');
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
   * To access the full response (for headers, for example), `apiProfileEditIdPut$Response()` instead.
   *
   * This method sends `application/*+json` and handles request body of type `application/*+json`.
   */
  apiProfileEditIdPut(params: {
    id: number;
    body?: EditProfileDto
  }): Observable<void> {

    return this.apiProfileEditIdPut$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiProfileFollowIdPost
   */
  static readonly ApiProfileFollowIdPostPath = '/api/Profile/Follow/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileFollowIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileFollowIdPost$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.ApiProfileFollowIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiProfileFollowIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileFollowIdPost(params: {
    id: number;
  }): Observable<void> {

    return this.apiProfileFollowIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiProfileUnFollowIdPost
   */
  static readonly ApiProfileUnFollowIdPostPath = '/api/Profile/UnFollow/{id}';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiProfileUnFollowIdPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileUnFollowIdPost$Response(params: {
    id: number;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, ProfileService.ApiProfileUnFollowIdPostPath, 'post');
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
   * To access the full response (for headers, for example), `apiProfileUnFollowIdPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiProfileUnFollowIdPost(params: {
    id: number;
  }): Observable<void> {

    return this.apiProfileUnFollowIdPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
