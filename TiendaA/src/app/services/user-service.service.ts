import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Usuario } from '../core/class/usuario';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

 


   // private apiUrl = 'http://localhost:8080/api/persona/crear'; // Reemplaza con la URL de tu API
   private URL = "http://localhost:8080/api/usuario";
   private URLcre = "http://localhost:8080/api/usuarip/crear";

   constructor(private http: HttpClient) { }
 
   // addUser(user: any): Observable<any> {
   //   return this.http.post<any>(this.apiUrl, user);
   // }

   getPersonas() {
     return this.http.get<Usuario[]>(`${this.URL}/listarp`);
   }
 
   getPorId(id_usuario: number) {
     return this.http.get<Usuario>(this.URL + id_usuario);
   }
 
   postPersona(usuario: Usuario) {
     return this.http.post<Usuario>(this.URLcre + '?', usuario);
   }
 
   updatePersona(usuario: Usuario, id_usuario: any) {
     return this.http.put<Usuario>(this.URL + `actualizar/${id_usuario}`, usuario);
   }
 
   deletePersona(idPersona: number) {
     return this.http.delete<boolean>(this.URL + `eliminar/${idPersona}`);
   }
 
   save(usuario: Usuario) {
     return this.http.post(`${this.URL}/`, usuario);
   }
 
   listarPersona(): Observable<any> {
     return this.http.get(`${this.URL}listaper`);
   }
 
   getPorCedula(id_usuario: any) {
     return this.http.get<Usuario>(this.URL + `buscarpersona/${id_usuario}`);
   }
   // getPersonasConUsuarios(): Observable<PersonaI[]> {
   //   return this.http.get<any>(`${this.URL}/listar?_expand=listaruser`)
   //     .pipe(
   //       map(data => data.map((item: any) => ({
   //         id: item.id_persona,
   //         cedula: item.cedula,
   //         nombre: item.nombre, 
   //         apellido:item.apellido,
   //         correo: item.correo,
   //         telefono:item.telefono,
   //         usuario: item.usuario
   //       })))
   //     );
   // }



   


}
