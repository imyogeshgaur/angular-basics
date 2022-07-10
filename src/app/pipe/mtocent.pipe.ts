import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mtocent'
})
export class MtocentPipe implements PipeTransform {

  transform(value: any, ...args: unknown[]): unknown {
    return value*100;
  }
}

@Pipe({
  name: 'usdtoinr'
})

export class usdtoinrPipe implements PipeTransform {
  transform(value: any, ...args: any[]): any {
        const[ag1,ag2] = args; 
        return value*ag1;
        // return value*ag2;
  }
}

