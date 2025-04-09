
import { Injectable, signal } from '@angular/core';

export type aviableLocale = 'es'|'fr'|'en';

@Injectable({providedIn: 'root'})
export class LocalService {
    

    private currentLocale = signal<aviableLocale>('fr');
    constructor(){
        this.currentLocale.set(
            (localStorage.getItem('locale') as aviableLocale) ?? 'es'
        )
    }

    get getLocale(){
        return this.currentLocale();
    }

    changeLocale(locale: aviableLocale){
        localStorage.setItem('locale',locale);
        this.currentLocale.set(locale);
        window.location.reload();
    }
    
}