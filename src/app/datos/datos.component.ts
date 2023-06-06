import { Component, ContentChild, Input, OnInit, TemplateRef } from '@angular/core';
import { BodyDirective } from '../content-trasnfer-data2/body.directive';
import { HomeComponent } from '../modules/dashboard/components/home/home.component';
import { TablaComponent } from '../tabla/tabla.component';


@Component({
  selector: 'app-datos',
  templateUrl: './datos.component.html',
  styleUrls: ['./datos.component.css']
})
export class DatosComponent implements OnInit {
  @Input() data:any;
  @ContentChild(BodyDirective,{read:TemplateRef}) bodyTemplate:any;

  list=[
    {nombre:'josé',
   edad:1,
    email:'jose@',
    custom:true,
   

    },
    {nombre:'juan',
    edad:52,
     email:'juan@gmail.com',
     custom:false

    },
    {nombre:'carlos',
    edad:99,
     email:'carlos@gmail.com',
     custom:true,
   

    },
    {nombre:'manolo',
    edad:22,
     email:'manolo@gmail.com',
     custom:true,
    

    }

  ]

  constructor() { }

  ngOnInit() {
  }

}
