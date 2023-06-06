import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { BodyDirective } from '../body.directive';

@Component({
  selector: 'app-list-items2',
  templateUrl: './list-items2.component.html',
  styleUrls: ['./list-items2.component.scss']
})
export class ListItems2Component implements OnInit {
  @Input() values:any;
  @ContentChild(BodyDirective,{read:TemplateRef}) bodyTemplate:any;

  widthExp=20;
  list=[
    {
      status:true
    },
    {
      status:false
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
