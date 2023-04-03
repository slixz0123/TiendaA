import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Persona } from '../core/class/persona';

@Injectable({
  providedIn: 'root'
})
export class RegisterUsrService {


   // private apiUrl = 'http://localhost:8080/api/persona/crear'; // Reemplaza con la URL de tu API
    private URL = "http://localhost:8080/api/persona";
    private URLcre = "http://localhost:8080/api/persona/crear";

    constructor(private http: HttpClient) { }
  
    // addUser(user: any): Observable<any> {
    //   return this.http.post<any>(this.apiUrl, user);
    // }

    getPersonas() {
      return this.http.get<Persona[]>(`${this.URL}/listarp`);
    }
  
    getPorId(idPersona: number) {
      return this.http.get<Persona>(this.URL + idPersona);
    }
  
    postPersona(persona: Persona) {
      return this.http.post<Persona>(this.URLcre + '?', persona);
    }
  
    updatePersona(persona: Persona, idPersona: any) {
      return this.http.put<Persona>(this.URL + `actualizar/${idPersona}`, persona);
    }
  
    deletePersona(idPersona: number) {
      return this.http.delete<boolean>(this.URL + `eliminar/${idPersona}`);
    }
  
    save(persona: Persona) {
      return this.http.post(`${this.URL}/`, persona);
    }
  
    listarPersona(): Observable<any> {
      return this.http.get(`${this.URL}listaper`);
    }
  
    getPorCedula(id_persona: any) {
      return this.http.get<Persona>(this.URL + `buscarpersona/${id_persona}`);
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
  



