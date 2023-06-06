import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'custom-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {
 value:any;
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
  change: any;

  onChange(){
    this.change.emit(true);
  }

  onChangeItem(id:string){
    console.log('se ejecuto evento hijo'+id);


  }
  receivedChildB(value:any){
    console.log(value);
  }

  constructor() { }

  ngOnInit() {
  }

}
