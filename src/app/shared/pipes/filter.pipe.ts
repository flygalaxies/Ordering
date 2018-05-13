import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
    name: 'filter'
})
export class FilterPipe implements PipeTransform {
    transform(items: any[], value?: any): any {
        if (!items) {
            return null;
        }
        if (!value) {
            return items;
        }
        value = value.toLowerCase();
        console.log(value);

        return items.filter((it) => {
            return it.name.toLowerCase().includes(value);
        });
    }
}