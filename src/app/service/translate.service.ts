import {Injectable} from '@angular/core';
import {Http, Headers, Response} from "@angular/http";
import {ApiService} from "./api.service";
import {Observable} from "rxjs";
@Injectable()
export class TranslateService {
  constructor(private api : ApiService) {
  }

}

