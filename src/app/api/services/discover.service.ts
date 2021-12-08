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

import { DiscoverDto } from '../models/discover-dto';

@Injectable({
  providedIn: 'root',
})
export class DiscoverService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation apiDiscoverGetGet
   */
  static readonly ApiDiscoverGetGetPath = '/api/Discover/Get';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscoverGetGet$Plain()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscoverGetGet$Plain$Response(params?: {
    items?: number;
  }): Observable<StrictHttpResponse<DiscoverDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscoverService.ApiDiscoverGetGetPath, 'get');
    if (params) {
      rb.query('items', params.items, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: 'text/plain'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DiscoverDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDiscoverGetGet$Plain$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscoverGetGet$Plain(params?: {
    items?: number;
  }): Observable<DiscoverDto> {

    return this.apiDiscoverGetGet$Plain$Response(params).pipe(
      map((r: StrictHttpResponse<DiscoverDto>) => r.body as DiscoverDto)
    );
  }

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiDiscoverGetGet$Json()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscoverGetGet$Json$Response(params?: {
    items?: number;
  }): Observable<StrictHttpResponse<DiscoverDto>> {

    const rb = new RequestBuilder(this.rootUrl, DiscoverService.ApiDiscoverGetGetPath, 'get');
    if (params) {
      rb.query('items', params.items, {});
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'text/json'
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<DiscoverDto>;
      })
    );
  }

  /**
   * This method provides access to only to the response body.
   * To access the full response (for headers, for example), `apiDiscoverGetGet$Json$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiDiscoverGetGet$Json(params?: {
    items?: number;
  }): Observable<DiscoverDto> {

    return this.apiDiscoverGetGet$Json$Response(params).pipe(
      map((r: StrictHttpResponse<DiscoverDto>) => r.body as DiscoverDto)
    );
  }

}
