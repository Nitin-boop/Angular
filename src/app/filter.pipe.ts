import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(items: any, query: string): any {
    if(query==""){
      return items;
    }
    else{
      return items.filter(i => {
        return i.name.toLowerCase().match(query.toLowerCase());
      });
    }
  }

}
