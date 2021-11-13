import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

const apiUrl = "https://randomuser.me/api/";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) { }

  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  getDataUser(): Observable<any> {
    return this.http.get(apiUrl).pipe(
      map(this.extractData));
  }

}
