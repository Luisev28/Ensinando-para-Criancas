import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})


export class AppComponent {
  public appPages = [
    { title: 'Alfabeto', url: '/folder/Inbox', icon:'' },
    { title: 'Cores ', url: 'amarelo', icon: '' },
    { title: 'Números', url: 'um', icon: '' },
    { title: 'Frutas', url: 'abacaxi', icon: '' },
    { title: 'Animais', url: 'cachorro', icon: '' },
    { title: 'Exercicios', url: 'exercicios', icon: '' },
   
  ];


  
  constructor() {}
}
