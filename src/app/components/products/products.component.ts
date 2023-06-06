import { Component, OnInit } from '@angular/core';
import { Product} from '../../models/product.model';
import { StoreService } from 'src/app/services/store.service';
import { ProductsService } from 'src/app/services/products.service';
@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private storeService:StoreService,
    private productsService:ProductsService) {
    this.myShoppingCart=this.storeService.getShoppingCart();
   }

  ngOnInit(): void {
    this.productsService.getAllProducts().subscribe(data =>{
      this.productos=data;
    })
  }
  total=0;
  myShoppingCart:Product[]=[];
  productos: Product[] = [];
  today=new Date();
  date=new Date(2021,1,21);

  onAddtoShoppingCart(product:Product){
    this.storeService.addProduct(product);
    this.total=this.storeService.getTotal();
}

}
