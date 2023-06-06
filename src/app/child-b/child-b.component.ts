import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'custom-child-b',
  templateUrl: './child-b.component.html',
  styleUrls: ['./child-b.component.css']
})
export class ChildBComponent implements OnInit {
  @Output() onData = new EventEmitter<any>();
  emitData(){
    this.onData.emit(true);
  }
  constructor() { }

  ngOnInit() {
  }

}
