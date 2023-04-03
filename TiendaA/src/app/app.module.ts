import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { FooterComponent } from './footer/footer.component';
import { ListaUsuarioComponent } from './lista-usuario/lista-usuario.component';
import { RegisterComponent } from './register/register.component';
import { HeaderComponent } from './header/header.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {  MatOptionModule } from '@angular/material/core';
import {  MatGridListModule } from '@angular/material/grid-list';
import {  MatSelectModule } from '@angular/material/select';







import { FormsModule } from '@angular/forms';
import { RegisterUsrService } from './services/register-usr.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    ListaUsuarioComponent,
    RegisterComponent,
    HeaderComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatMenuModule,
    MatToolbarModule,
    FormsModule,
    MatButtonModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatGridListModule,
    MatSelectModule,
    HttpClientModule

 
  
  ],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
