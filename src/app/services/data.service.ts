import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _HttpClient:HttpClient) { }

  getData():Observable<any>
  {
    return this._HttpClient.get('https://ahmedreyad228.github.io/api/db.json')
  }

}
