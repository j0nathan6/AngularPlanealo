import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  headers = new HttpHeaders()
                .set("Ocp-Apim-Subscription-Key","8deda8e625fd4fdfac0d634f39c62041")

  constructor(private http: HttpClient) { }

  getRoute(param: string) {
    // return this.http.get('https://viewpr.azure-api.net/api/venue?city=Camuy',headers: {headers})
    return this.http.get('https://viewpr.azure-api.net/api/venue?businessStatus=1&city='+param, {
      headers: {'Ocp-Apim-Subscription-Key': '8deda8e625fd4fdfac0d634f39c62041'}
  });
  }
}