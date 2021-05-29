import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class XhrService {

  constructor(private http : HttpClient) { }

  get(url) : Observable<any> {
      return this.http.get(url);
  }


}
