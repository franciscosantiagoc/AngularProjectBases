import { Component, OnInit } from '@angular/core';
import { Character } from '../interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: 'main-page.component.html'
})

export class MainPageComponent {
  public characters: Character[] = [
    {
      name: 'Krillin',
      power: 3000
    },
    {
      name: 'Goku',
      power: 10000
    },
    {
      name: 'Piccoro',
      power: 7000
    },
    {
      name: 'Gohan',
      power: 4000
    }
  ];
}
