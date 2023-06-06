import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { map } from 'rxjs';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  id:string='';
  parent: string='';
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
    //this.route.parent?.paramMap.subscribe((map:ParamMap)=>{
      //this.parent=String(map.get('menuId'));
      //console.log(this.id);
      //this.getMenu(this.id);
    //})

    this.route.paramMap.subscribe((map:ParamMap)=>{
      this.id=String(map.get('id'));
      console.log(this.id);
      this.getMenu(this.id);
    })





  }
  getMenu(id:string){
    this.id=id;
  }
}
