import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelText',
})
export class CamelTextPipe implements PipeTransform {
  transform(value: string, ...args: unknown[]): string {
    return value
      .split('')
      .map((c, i) => (!(i % 2) ? c.toUpperCase() : c.toLowerCase()))
      .join('');
  }
}
