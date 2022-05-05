import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FooterComponent } from './Footer/footer/footer.component';
import { ActualizarComponent } from './Persona/actualizar/actualizar.component';
import { ListarComponent } from './Persona/listar/listar.component';
import { NuevoComponent } from './Persona/nuevo/nuevo.component';
import { MenuComponent} from "./menu/menu.component";

const routes: Routes = [
  {path:'listar',component:ListarComponent},
  {path:'nuevo',component:NuevoComponent},
  {path:'actualizar',component:ActualizarComponent},
  {path:'footer',component:FooterComponent},
  {path:'menu',component:MenuComponent},
   
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
