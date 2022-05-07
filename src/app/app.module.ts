import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { NuevoComponent } from './Persona/nuevo/nuevo.component';
import { ActualizarComponent } from './Persona/actualizar/actualizar.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';
import { invokeInstruction } from '@angular/compiler/src/render3/view/util';
import { InterpolationConfig } from '@angular/compiler';




@NgModule({
  declarations: [
    AppComponent,
    ListarComponent,
    NuevoComponent,
    ActualizarComponent,
    MenuComponent
  
  

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule   
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
