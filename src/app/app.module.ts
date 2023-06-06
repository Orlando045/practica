import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ParentComponent } from './parent-a/parent.component';
import { ChildAComponent } from './child-a/child-a.component';
import { ChildBComponent } from './child-b/child-b.component';
import { ListCardsComponent } from './list-cards/list-cards.component';
import { CardComponent } from './card/card.component';
import { ButtonsComponent } from './buttons/buttons.component';
import { ListItems2Component } from './content-trasnfer-data2/list-items2/list-items2.component';
import { Items2Component } from './content-trasnfer-data2/items2/items2.component';
import { BodyDirective } from './content-trasnfer-data2/body.directive';

import { ImgComponent } from './components/img/img.component';
import { ProductComponent } from './components/product/product.component';
import { ProductsComponent } from './components/products/products.component';
import { NavComponent } from './components/nav/nav.component';
import { LoginComponent } from './components/login/login.component';
import { MainComponent } from './components/main/main.component';
import { MenuComponent } from './components/menu/menu.component';





@NgModule({
  declarations: [
    AppComponent,
      ParentComponent,
      ChildAComponent,
      ChildBComponent,
      ListCardsComponent,
      CardComponent,
      ButtonsComponent,
      ListItems2Component,
      Items2Component,
      BodyDirective,


      ImgComponent,
      ProductComponent,
      ProductsComponent,
      NavComponent,
      LoginComponent,
      MainComponent,
      MenuComponent,



   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
