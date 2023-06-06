import { Component, OnInit } from '@angular/core';
import { FilterItemsPipe } from './filterItems.pipe';



@Component({
  selector: 'customParent-a',
  templateUrl: './parent-a.component.html',
  styleUrls: ['./parent-a.component.scss'],
  providers: [FilterItemsPipe] // Agrega el filtro de tubería como proveedor
})
export class ParentAComponent implements OnInit {
  searchText: string = '';
  value: any;
  listItems = [
    {
      total: 100,
      id: 'd77ef206-1b07-5c68-a669-0e2d112edce9',
      description: 'YT',
      title: 'Woibzo'
      
    },
    {
      total: 100,
      id: '157dc8bf-2b8c-5a0e-9657-da8b671df006',
      description: 'SY',
      title: 'Evufede'
    },
    {
      total: 100,
      id: '0edeec8d-e768-5dad-b8a6-05f8c12f35c1',
      description: 'BE',
      title: 'Ipinaguwe'
    },
    {
      total: 100,
      id: '857f7488-ab77-58b1-8fc6-6782c615368f',
      description: 'BE',
      title: 'Movuzuk'
    },
    {
      total: 100,
      id: 'f266d343-ccda-59a9-bd8e-9daea1282707',
      description: 'UA',
      title: 'Elakinvag'
    },
    {
      total: 100,
      id: 'f4f2eefa-bc17-5b6d-a102-8b113225b24a',
      description: 'MK',
      title: 'Tucomu'
    },
    {
      total: 100,
      id: '3b1a57dc-abca-5d23-83af-5b52f50c8928',
      description: 'LC',
      title: 'Wusoweela'
    }
  ];

  ngOnInit(): void {
    
  }

  onChangeItem(id: string) {
    console.log('se ejecutó evento hijo' + id);
  }

  receivedChildB(value: any) {
    console.log(value);
  }

  onSearchChange(searchText: string) {
    this.searchText = searchText;
  }
}
