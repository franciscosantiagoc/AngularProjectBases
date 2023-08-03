import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  studentsList: any[] = [
    {
      name: 'Saul Lopez',
      status: 'reprobado'
    },
    {
      name: 'Francisco Santiago',
      status: 'titulado'
    },
    {
      name: 'Shuanaxhi Jimenez',
      status: 'pausado'
    }
  ];
  mostrar = true;

  displayList(): void {
    this.mostrar = !this.mostrar;
  }

}
