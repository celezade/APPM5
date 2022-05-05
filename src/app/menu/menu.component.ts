import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router:Router) { }
  Listar(){
    this.router.navigate(["listar"]);
      }
  Nuevo(){
    this.router.navigate(["nuevo"]);
  }
  Actualizar(){
    this.router.navigate(["actualizar"]);
  }
  ngOnInit(): void {
  }

}
