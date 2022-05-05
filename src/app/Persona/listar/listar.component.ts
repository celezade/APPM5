import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';
import { Clientes } from 'src/app/Modelo/clientes.modelo';
import{ServicioService} from 'src/app/Servicio/servicio.service';



@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
ClientesList:Clientes[]=[];
  constructor(private servicioservice:ServicioService) { }

  ngOnInit(): void {
   this.servicioservice.getClienteList().subscribe(response => {
     this.ClientesList= response;
   }
    );
  
    }

}
