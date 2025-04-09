import { DatePipe, LowerCasePipe, TitleCasePipe, UpperCasePipe } from '@angular/common';
import {Component, effect, inject, LOCALE_ID, signal } from '@angular/core';
import { aviableLocale, LocalService } from '../../service/local.service';

@Component({
  selector: 'app-basic-page',
  imports: [LowerCasePipe, UpperCasePipe, TitleCasePipe, DatePipe],
  templateUrl: './basic-page.component.html',
})
export default class BasicPageComponent {

  localService = inject(LocalService);
  currentLocale = signal(inject(LOCALE_ID));

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

  changeLocale(locale: aviableLocale){
    this.localService.changeLocale(locale);
  }
}
