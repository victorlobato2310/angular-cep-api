import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(valor: any, ...args: any[]): any {
    let valores = valor.split(' ');
    let resultado = '';

    for(let valor of valores) {
      resultado += this.capitalize(valor) + ' ';
    }

    return resultado;
  }

  capitalize(valor: string) {
    return valor.substring(0,1).toUpperCase() +
    valor.substring(1).toLowerCase();
  }

}
