import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primer proyecto de angular 2023';
  userName = 'Francisco Santiago'


  constructor() {
    setInterval(() => {
      this.userName = this.userName == 'Francisco Santiago' ? 'Nombre de usuario dinamico' : 'Francisco Santiago';
    }, 3000);
  }
}
