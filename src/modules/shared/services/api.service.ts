import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class ApiService {

  constructor(private http: HttpClient) {
  }

  public makeRequest(method: HttpMethod, url: string, options?: any): Observable<any> {
    return this.http.request(method, url, options);
  }

}

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';
