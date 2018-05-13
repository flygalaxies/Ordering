import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'decode64'
})
export class DecodePipe implements PipeTransform {
    transform(value: string, args?: any) {
        let a = '';
        if(value){
            a = atob(value);
        }
        return a;
    }
}