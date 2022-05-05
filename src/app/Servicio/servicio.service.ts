import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { Clientes } from '../Modelo/clientes.modelo';





@Injectable({
  providedIn: 'root'
})
export class ServicioService {

CLIENTES_URL="clientes";
  constructor(private http:HttpClient) {   }

getClienteList():Observable<any>{
return this.http.get("http://localhost:8080/clientes");

}
save(clientes:Clientes){
  return this.http.post("http://localhost:8080/clientes",clientes);
}
}