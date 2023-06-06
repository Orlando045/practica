import { Component, OnInit, } from '@angular/core';
import {person } from './person';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent  {
  
   persona = {
    name: 'juan',
    Lastname: 'martinez',
    Contrasena: 1234,
    Telefono: 12345,
    correo: ''
  }
  
  formulario(){
    return this.persona;
  }

 

}
