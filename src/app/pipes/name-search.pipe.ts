import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameSearch'
})
export class NameSearchPipe implements PipeTransform {

  transform(accounts: any[], searchText: string): any[] {

    let filteredAccounts: any[] = [];

    for (let acc of accounts) {
      if (acc.name.toLowerCase().includes(searchText.toLowerCase())
        || acc.creationdate.toLowerCase().includes(searchText.toLowerCase())) {
        filteredAccounts.push(acc);
      }
    }

    return filteredAccounts;
  }

}
