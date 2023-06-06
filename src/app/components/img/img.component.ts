import { Component, OnInit, Input, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit,OnChanges, AfterViewInit, OnDestroy {
  img: string ='';
  @Input('img')
  set changeImg(newImg:string){
    this.img=newImg;
    console.log('change just img=>',this.img)
  };
 @Input() alt: string ='';
 @Output() loaded=new EventEmitter<string>();
 imageDefault='./assets/1.jpg';
 //counter=0;
 //counterfm:number|undefined;
  constructor() {

    console.log('constructor','imgvalue=>', this.img);
  }
  ngOnChanges(changes:SimpleChanges){
    //before-during renders
    //changes inputs
    console.log('ngOnChanges','imgvalue=>', this.img);
    console.log('changes',changes)
  }
  ngOnInit(): void {
    //before render
    //async-fetch--once time
    console.log('ngOnInit','imgvalue=>', this.img);
   //this.counterfm= window.setInterval(()=>{
     // this.counter+=1;
      //console.log('run counter');
    //},1000);
  }
  ngAfterViewInit(): void {
    //after render
    //handler children
    console.log('ngAfterViewInit');
  }
  ngOnDestroy(): void {
    //delete
    console.log('ngOnDestroy');
    //window.clearInterval(this.counterfm);

  }
imgError(){
  this.img=this.imageDefault;
}

imgLoaded(){
  console.log('log hijo');
  this.loaded.emit(this.img);
}


}
