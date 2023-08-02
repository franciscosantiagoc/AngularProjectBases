import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Este es un ejemplo de event binding';
  
  cambiarTexto() : void {
    this.title = 'En el proximo video vamos a ver Two way data-binding';
  }
}
