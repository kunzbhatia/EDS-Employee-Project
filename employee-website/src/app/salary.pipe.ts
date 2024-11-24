import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'salary'
})
export class SalaryPipe implements PipeTransform {
  transform(value: number, currencySymbol: string = '$'): string {
    return `${currencySymbol}${value.toLocaleString()} per annum`;
  }
}