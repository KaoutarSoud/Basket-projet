import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  transform(items: any[], searchTerm: string): any[] {
    if (!items) return [];
    if (!searchTerm) return items;

    searchTerm = searchTerm.toLowerCase();

    return items.filter(it => {
      return it.prenom.toLowerCase().includes(searchTerm) ||
             it.nom.toLowerCase().includes(searchTerm) ||
             it.equipe.toLowerCase().includes(searchTerm);
    });
  }
}
