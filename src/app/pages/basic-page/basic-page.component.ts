import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import {Component, effect, signal } from '@angular/core';
import { dateTimestampProvider } from 'rxjs/internal/scheduler/dateTimestampProvider';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {
  nameLower = signal ('sergio');
  nameUpper = signal ('SERGIO');
  nameName = signal ('sErgIo CrUZ');


  customDate = signal ( new Date());

  tickingDateEffect = effect((onCleanup) =>{
    const interval = setInterval (() => {
      this.customDate.set(new Date());
      console.log('tick');
    }, 1000);

    onCleanup (() => {
      clearInterval(interval);
    })
  })
}
