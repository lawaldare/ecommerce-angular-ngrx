import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'truncate',
})
export class TruncatePipe implements PipeTransform {
  transform(value: string): string {
    const trucatedValue =
      value.length > 25 ? value.slice(0, 250) + '...' : value;
    return trucatedValue;
  }
}
