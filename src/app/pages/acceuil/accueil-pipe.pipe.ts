import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'accueilPipe'
})
export class AccueilPipePipe implements PipeTransform {

  transform(value: any, args?: any): any {

    if(!value) return [];
    if(!args) return value;

    return value.filter( it => {
      return it.title.toLowerCase().includes(args.toLowerCase());
    });

  }

}
