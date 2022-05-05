import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/Servicio/servicio.service';
import { Clientes } from 'src/app/Modelo/clientes.modelo';
import { RouteConfigLoadStart, Router } from '@angular/router';




@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
 
  ClientesSave:Clientes[]=[];

  constructor(private servicioservice:ServicioService, private route:Router) { }


  ngOnInit(): void {
  }
  
  SaveClientes(){
   
        this.servicioservice.save(this.ClientesSave[0]).subscribe(response => {
      this.route.navigateByUrl('app-root');
alert('Cliente guardado');
    });
  }
}
