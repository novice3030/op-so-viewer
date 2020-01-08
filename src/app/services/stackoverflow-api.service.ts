import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class StackoverflowApiService {
  constructor(private http: HttpClient) {}

  queryTags(tag: string): Observable<any> {
    if (tag) {
      return this.http.get(
        `https://api.stackexchange.com/2.2/tags/${tag}/faq?site=stackoverflow`
      );
    }
    return of(null);
  }
}
