import { ApplicationConfig, LOCALE_ID, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { registerLocaleData } from '@angular/common';

import localEs from '@angular/common/locales/es'
import localFr from '@angular/common/locales/fr'
import { LocalService } from './service/local.service';

registerLocaleData(localEs, 'es')
registerLocaleData(localFr, 'fr')


export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes),


    {
      provide: LOCALE_ID,
      deps: [LocalService],
      useFactory: (localService: LocalService) => localService.getLocale,
    },
  ],
};
