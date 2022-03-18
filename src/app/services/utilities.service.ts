import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UtilitiesService {

  constructor(private http : HttpClient) { }

   getItems(): Observable<any> {
    return this.http
      .jsonp<any>('https://www.kayak.com/h/mobileapis/directory/airlines/homework', 'jsonp')
      .pipe();
  }

}
