import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-child-a',
  templateUrl: './child-a.component.html',
  styleUrls: ['./child-a.component.css']
})
export class ChildAComponent  {

  //@Input('setitem') data:any;
  //@Output('OnChange') change: EventEmitter<string> = new EventEmitter();
  //onChange(){
    //this.change.emit(this.data.id);
  selected=false;
    OnChange(){
      this.itemChange.emit(this.data);
      this.selected=!this.selected;
    }
    receivedChildB(value:any){
      this.emitData.emit(value);
    }
    _item={};
    @Output() itemChange = new EventEmitter<any>();
    @Output() emitData = new EventEmitter<any>();
    @Input() data:any;
    @Input()
    get item(){
      return this._item;
    }
    set item(value:any){
      this._item=value;

    }
  }

