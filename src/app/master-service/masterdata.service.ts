import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MasterdataService {
  httpOptions = {};
  constructor(private http: HttpClient) {
    // this.httpOptions={
    //   headers: new HttpHeaders({
    //     'Content-Type': 'application/json',
    //   })
    // }
  }

  getTimeSeriesData() {
    return this.http.get(
      'https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=IBM&interval=5min&apikey=demo'
    );
  }
}
