import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  private apiUrl = 'https://api.football-data.org/v4';
  private apiKey = 'c07636e635934f09b97f94a0ae70feb6';

  constructor(private http: HttpClient) {}


  getPartidosEuro(): Observable<any> {

    const headers = new HttpHeaders({

      'X-Auth-Token': this.apiKey,


    });

    const url = `${this.apiUrl}/competitions/EC/matches`;

    return this.http.get(url, { headers });
  }


}
