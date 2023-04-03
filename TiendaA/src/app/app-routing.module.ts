import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';

const routes: Routes = [

  {path:'', component:HomeComponent},
  {path:'Reg', component:RegisterComponent},
  {path:'list-usr', component:ListaUsuarioComponent},
  {path:'usr', component:HomeComponent},

];

@NgModule({
  
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
