import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Mi primer proyecto de angular 2023';
  userName = 'Francisco Santiago';

  textPlaceHolder = 'Escriba algo en este input';
  inputEnabled = true;  
  imgSource = "https://s3-us-west-1.amazonaws.com/angular-university/course-images/angular-core-in-depth-small.png";


  constructor() {
    setInterval(() => {
      this.userName = this.userName == 'Francisco Santiago' ? 'Nombre de usuario dinamico' : 'Francisco Santiago';

      this.inputEnabled = false;
    }, 3000);
  }

  getSuma(num1: number, num2: number) {
    return num1 + num2;
  }
}
