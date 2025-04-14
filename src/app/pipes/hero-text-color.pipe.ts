import { Pipe, PipeTransform } from '@angular/core';
import { Color, ColorMap } from '../interfaces/hero.interface';

@Pipe({
    name: 'heroTextColor'
})

export class heroTextColorPipe implements PipeTransform {
    transform(value: Color): string {
        return ColorMap[value];
        
    }
}