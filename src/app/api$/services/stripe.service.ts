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


@Injectable({
  providedIn: 'root',
})
export class StripeService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation connectOauthGet
   */
  static readonly ConnectOauthGetPath = '/connect/oauth';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `connectOauthGet()` instead.
   *
   * This method doesn't expect any request body.
   */
  connectOauthGet$Response(params?: {
    state?: string;
    code?: string;
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StripeService.ConnectOauthGetPath, 'get');
    if (params) {
      rb.query('state', params.state, {});
      rb.query('code', params.code, {});
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
   * To access the full response (for headers, for example), `connectOauthGet$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  connectOauthGet(params?: {
    state?: string;
    code?: string;
  }): Observable<void> {

    return this.connectOauthGet$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation apiStripePaymentCompletedWebhookPost
   */
  static readonly ApiStripePaymentCompletedWebhookPostPath = '/api/Stripe/PaymentCompleted/webhook';

  /**
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `apiStripePaymentCompletedWebhookPost()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStripePaymentCompletedWebhookPost$Response(params?: {
  }): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, StripeService.ApiStripePaymentCompletedWebhookPostPath, 'post');
    if (params) {
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
   * To access the full response (for headers, for example), `apiStripePaymentCompletedWebhookPost$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  apiStripePaymentCompletedWebhookPost(params?: {
  }): Observable<void> {

    return this.apiStripePaymentCompletedWebhookPost$Response(params).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

}
