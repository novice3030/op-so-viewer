import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StackoverflowApiService {

  constructor(private http: HttpClient) { }

  queryTags(tag: string): Observable<any> {
    return this.http.get(`https://api.stackexchange.com/2.2/tags/${tag}/faq?site=stackoverflow`);
  }
}
