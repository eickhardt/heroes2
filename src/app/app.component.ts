import { Component } from '@angular/core';

import { INgxMyDpOptions, IMyDateModel } from 'ngx-mydatepicker';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  category = '';
  subCategory = '';
  entryName = '';
  dateOptions: INgxMyDpOptions = {
    dateFormat: 'dd-mm-yyyy',
    minYear: 2000,
    maxYear: 2200
  };
  // Initialized to specific date (09.10.2018)
  dateModel: any = { jsdate: new Date() };

  // optional date changed callback
  onDateChanged(event: IMyDateModel): void {
    // date selected
    console.log(event);
  }
}
