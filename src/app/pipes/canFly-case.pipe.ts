import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'canFly'
})

export class canFlyPipe implements PipeTransform {
    transform(value: boolean,): string {
        if(value){
            return "Puede volar";
        } else {
            return "No puede volar"
        }
        
    }
}