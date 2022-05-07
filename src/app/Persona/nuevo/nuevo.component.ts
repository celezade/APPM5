import { Component, OnInit } from '@angular/core';
import { ServicioService } from 'src/app/Servicio/servicio.service';
import {Clientes } from 'src/app/Modelo/clientes.modelo';
import { ActivatedRoute, Router } from '@angular/router';
import {FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-nuevo',
  templateUrl: './nuevo.component.html',
  styleUrls: ['./nuevo.component.css']
})
export class NuevoComponent implements OnInit {
  form:FormGroup | undefined;
  


  constructor(
    private router:ActivatedRoute,
    private servicioservice:ServicioService, 
    private route:Router
    ) { }


  ngOnInit(): void {
    this.form= new  FormGroup({

     
      inputCedula:new FormControl(''),
      inputNombres:new FormControl(''),
      inputApellidos:new FormControl(''),
      inputCelular:new FormControl(''),
      inputCorreo:new FormControl(''),
      inputDireccion:new FormControl(''),
      inputUsuario:new FormControl(''),
      inputPassword:new FormControl('')
    });

   



  }
  

  Guardar(){
    let clientes= new Clientes();
    //clientes.id=this.form.value['inputid'];
    clientes.cedula=this.form.value['inputCedula'];
    clientes.name=this.form.value['inputNombres'];
    clientes.lastname=this.form.value['inputApellidos'];
    clientes.phone=this.form.value['inputCelular'];
    clientes.correo=this.form.value['inputCorreo'];
    clientes.address=this.form.value['inputDireccion'];
    clientes.usuario=this.form.value['inputUsuario'];
    clientes.clave=this.form.value['inputPassword'];
    
    this.servicioservice.GuardarClientes(clientes).subscribe(()=>{
     alert("INFORMACION GUARDADA");

     this.form= new  FormGroup({

     
      inputCedula:new FormControl(''),
      inputNombres:new FormControl(''),
      inputApellidos:new FormControl(''),
      inputCelular:new FormControl(''),
      inputCorreo:new FormControl(''),
      inputDireccion:new FormControl(''),
      inputUsuario:new FormControl(''),
      inputPassword:new FormControl('')
    }); 

    });
    

  
   
  }

}
