import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CarFlowService {
  API_URL  =  'http://127.0.0.1:8000';
  constructor(private _http: HttpClient) { }

  dailyCars() {
    return this._http.get(`${this.API_URL}/getCarsFlow/`).pipe(
      map(result => result)
    );
  }
  weeklyCars(){

  }
  monthlyCars(){

  }
}
