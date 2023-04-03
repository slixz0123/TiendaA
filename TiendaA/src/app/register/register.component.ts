import { Component, OnInit } from '@angular/core';
import { trigger, state, style, transition, animate } from '@angular/animations';
import { RegisterUsrService } from '../services/register-usr.service';
import { Persona } from '../core/class/persona';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  animations: [
    trigger('fadeInOut', [
      state('void', style({
        opacity: 0
      })),
      transition(':enter, :leave', [
        animate(500)
      ])
    ])
  ]


})
export class RegisterComponent  implements OnInit{
  persona: Persona = new Persona;
  //usuario: Usuario = new Usuario;

  constructor(private registerUsrService: RegisterUsrService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.registerUsrService.postPersona(this.persona).subscribe(response => {
      console.log(response); // Imprime la respuesta de la API en la consola
    });
    this.registerUsrService.postPersona(this.persona).subscribe(response => {
      console.log(response); // Imprime la respuesta de la API en la consola
    });
  }





  
}
