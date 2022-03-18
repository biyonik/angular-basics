import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tl'
})
export class TlPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return "₺"+value;
  }

}
