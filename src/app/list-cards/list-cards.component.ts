import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-cards',
  templateUrl: './list-cards.component.html',
  styleUrls: ['./list-cards.component.css']
})
export class ListCardsComponent implements OnInit {
  list=[
    {nombre:'fernando',
    description:'muy fernandesco',
    id:'holasoyunida'

    },
    {nombre:'orlando',
    description:'muy orlandesco',
    id:'holasoyunida2'

    },
    {nombre:'julio',
    description:'muy julian',
    id:'holasoyunidjulian'

    },
    {nombre:'Andres',
    description:'muy julian',
    id:'holasoyunidjulian'

    }
  ]

  submit(id:string){
    console.log(id);
  }
  constructor() { }

  ngOnInit() {
  }

}
