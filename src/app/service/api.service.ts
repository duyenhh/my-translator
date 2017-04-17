/**
 * Created by Kin_meow on 4/11/2017.
 */
import {URLSearchParams} from "@angular/http"
import {Injectable} from '@angular/core';
import {Http, Headers, Response} from "@angular/http";

import {environment} from "../../environments/environment";
import {Observable} from "rxjs";
@Injectable()
export class ApiService {
  private BASE_URL = 'https://translate.yandex.net/api/v1.5/tr.json/translate';

  constructor(private http: Http) {
  }


  public testTranslate(input: string) {

    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    let data = new URLSearchParams();
    data.append('lang', 'en-vi');
    data.append('format', 'plain');
    data.append('key', 'trnsl.1.1.20170320T160640Z.85d53b17fe3adf25.80e87bca517ea2140ec200a49ffea138879bfe0b');
    data.append('text', input);
    let body = data.toString()


    return this.http
      .post(this.BASE_URL, body, {headers: headers});
  }

}
