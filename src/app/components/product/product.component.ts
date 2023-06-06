import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import{Product} from '../../models/product.model';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {
  ngOnInit() {

  }
  @Output() addedProduct= new EventEmitter<Product>();
  @Input() product:Product={
    id: 0,
    title: '',
    image: '',
    price: 0,
    description: '',
    category: ''
  }
  onAddToCart(){
    this.addedProduct.emit(this.product);
  }

 }
