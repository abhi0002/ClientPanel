import { PipeTransform, Pipe } from '@angular/core';

@Pipe({
  name: 'addPlus'
})
export class PhonePipe implements PipeTransform {
  transform(value: any) {
    return '+91' + value;
  }
}
