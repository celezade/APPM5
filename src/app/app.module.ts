import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { NuevoComponent } from './Persona/nuevo/nuevo.component';
import { ActualizarComponent } from './Persona/actualizar/actualizar.component';
import { FooterComponent } from './Footer/footer/footer.component';


import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';




@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    NuevoComponent,
    ActualizarComponent,
    FooterComponent,
    MenuComponent
  
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    
    HttpClientModule,
   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
