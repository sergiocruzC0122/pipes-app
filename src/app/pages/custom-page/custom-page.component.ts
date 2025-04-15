import { Component, signal } from '@angular/core';
import { ToggleCasePipe } from '../../pipes/toggle-case.pipe';
import { heroes } from '../../data/heroes.data';
import { canFlyPipe } from '../../pipes/canFly-case.pipe';
import { heroColorPipe } from '../../pipes/heroColor-case.pipe';
import { heroTextColorPipe } from '../../pipes/hero-text-color.pipe';
import { TitleCasePipe } from '@angular/common';
import { heroCreatorPipe } from '../../pipes/hero-creator.pipe';
import { heroSortByPipe } from '../../pipes/hero-sort-by.pipe';
import { Hero } from '../../interfaces/hero.interface';
import { heroFilterPipe } from '../../pipes/hero-filter.pipe';


@Component({
  selector: 'app-custom-page',
  imports: [
    ToggleCasePipe, 
    canFlyPipe,
    heroColorPipe,
    heroTextColorPipe,
    TitleCasePipe,
    heroCreatorPipe,
    heroSortByPipe,
    heroFilterPipe,
  ],
  templateUrl: './custom-page.component.html',
})
export default class CustomPageComponent {

  name = signal('Nicolas Cruz');
  upperCase = signal(true)
  heroes= signal(heroes);

  sortBy = signal<keyof Hero | null> (null);

  searchQuery = signal('');

}
