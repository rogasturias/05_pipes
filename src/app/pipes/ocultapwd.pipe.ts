import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ocultapwd'
})
export class OcultapwdPipe implements PipeTransform {

  transform(value: string, oculta: boolean ): string {
  let res = '';
  if ( !oculta ){
  res = value;
   } else {
  for ( const char of value ){
  res += '*';
   }
   }
  return res;
  }

}
