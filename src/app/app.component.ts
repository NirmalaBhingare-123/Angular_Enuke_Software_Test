import { Component, VERSION } from '@angular/core';
import { MasterdataService } from './master-service/masterdata.service';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  name = 'Angular Demo ' + VERSION.major;
  timeSeries = [];
  constructor(private masterDataService: MasterdataService) {}

  ngOnInit() {
    this.masterDataService.getTimeSeriesData().subscribe((resp: any) => {
      console.log('resp', resp);
      this.timeSeries = Object.entries(resp['Time Series (5min)']);
      console.log("timeSeries",this.timeSeries)
    });
  }
}
