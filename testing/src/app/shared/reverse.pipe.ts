import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'reverse'})
export class NamePipe implements PipeTransform {
    transform(value: any): any {
        return value.split('').reverse().join('');
    }
}
