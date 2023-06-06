import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterItems'
})
export class FilterItemsPipe implements PipeTransform {
  transform(items: any[], searchText: string): any[] {
    if (!items || !searchText) {
      return items;
    }
    // if (!searchText) {
    //   return items;
    // }
    searchText = searchText.toLowerCase();
    return items.filter(item => {
      return (
        item.total.toString().toLowerCase().includes(searchText)||
        item.id.toLowerCase().includes(searchText) ||
        item.description.toLowerCase().includes(searchText) ||
        item.title.toLowerCase().includes(searchText)
      );
    });
  }
}