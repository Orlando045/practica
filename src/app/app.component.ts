import { Component } from '@angular/core';
import{product} from './product.module';
import{Product} from '././models/product.model';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  showImage=true;


  imgParent='';
  list=[
    {nombre:'fernando',
    description:'muy fernandesco',
    id:'holasoyunida',
    custom:true

    },
    {nombre:'orlando',
    description:'muy orlandesco',
    id:'holasoyunida2',
    custom:true

    },
    {nombre:'julio',
    description:'muy julian',
    id:'holasoyunidjulian',
    custom:false

    },
    {nombre:'Andres',
    description:'muy julian',
    id:'holasoyunidjulian',
    custom:false

    }
  ]
  box={
    width:100,
    height:100,
    background:'red'

  }

  register={
    name:'',
    email:'',
    password:'',
  }


widthImg=10;
  name='fernando';
  age=18;
  img='https://www.wikihow.com/images_en/thumb/8/8a/Select-All-Step-1-Version-5.jpg/v4-460px-Select-All-Step-1-Version-5.jpg.webp';

  btndisable=true;
  persona={
    name:'fernando',
    edad: 18,
  img:'https://www.wikihow.com/images_en/thumb/8/8a/Select-All-Step-1-Version-5.jpg/v4-460px-Select-All-Step-1-Version-5.jpg.webp'

  }
  nombres:string []= ['Nico', 'Samuel','fernando']

  products: product[]=[
  {
    producto:'leche',
    costo: 23,
    img:'./assets/1.jpg'

  },
  {
    producto:'jugo',
    costo: 19,
    img:'https://www.wikihow.com/images_en/thumb/8/8a/Select-All-Step-1-Version-5.jpg/v4-460px-Select-All-Step-1-Version-5.jpg.webp'

  },
  {
    producto:'computadora',
    costo: 2400,
    img:'https://www.wikihow.com/images_en/thumb/8/8a/Select-All-Step-1-Version-5.jpg/v4-460px-Select-All-Step-1-Version-5.jpg.webp'

  }






];


  togglebutton(){
    this.btndisable=! this.btndisable;
  }
  newname='';

  agregarNombre(){
  this.nombres.push(this.newname);
  this.newname='';
  }
  borrarDato(index:number){
    this.nombres.splice(index,1);
  }
  incrementaredad(){
    this.persona.edad+=1;
  }

  onScroll(event:Event){
    const element= event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event:Event){
    const element= event.target as HTMLInputElement;
    this.persona.name= element.value;
  }
onRegister(){
  console.log(this.register);
}
onLoad(img:string){
  console.log('console log padre',img);

}
toggleImg(){
  this.showImage=!this.showImage;
}
}
