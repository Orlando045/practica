import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  id: string = '';

  constructor( private route: ActivatedRoute) { 

  }
  ngOnInit(): void {
    this.route.paramMap.subscribe (map => {
     this.id = String( map.get ('id2'));
      console.log(this.id);    
      this.getMenu(this.id);
    })
  }
  getMenu(id: string){
    this.id = id  ;
  }

}
