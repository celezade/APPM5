import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Clientes } from '../Modelo/clientes.modelo';





@Injectable({
  providedIn: 'root'
})
export class ServicioService {

CLIENTES_URL="http://localhost:8080/clientes";
  constructor(private http:HttpClient) {   }

getClienteList():Observable<any>{
return this.http.get("http://localhost:8080/clientes");

}
GuardarClientes(clientes:Clientes):Observable<any>{
  
  return this.http.post("http://localhost:8080/clientes",clientes)
}

EliminarClientes(cedula:String):Observable<any>{
  
  return this.http.delete("http://localhost:8080/clientes?cedula="+cedula);
}

}