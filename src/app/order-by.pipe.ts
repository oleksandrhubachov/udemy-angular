import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class OrderByPipe implements PipeTransform {

  transform(values: any[], property: string): unknown {
    if (values.length === 0) {
      return values;
    }
    if (property.charAt(0) === '-') {
      return values.sort((a, b) => a[property.substr(1)] < b[property.substr(1)] ? 1 : -1);
    }
    return values.sort((a, b) => a[property] > b[property] ? 1 : -1);
  }

}
