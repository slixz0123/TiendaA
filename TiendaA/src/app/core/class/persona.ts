import { Carrito } from "./carrito";

  export class Persona {

    id_persona?: number;
    cedula?: string;
    nombre?: string;
    apellido?: string;
    email?: string;
    sexo?: string;
    telefono?: string;
    celular?: string;
    codigo_postal?: string;
    enable?: boolean;

    //relacion
    carrito?: Carrito; 
    
  }