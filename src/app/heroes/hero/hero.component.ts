import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent {
  public name: string = 'ironman';
  public age: number = 45;

  public displayButtonChangeHero: boolean = true;
  public displayButtonChangeAge: boolean = true;

  get capitalizeName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} tiene ${this.age} años`;
  }

  changeHero(): void {
    this.name = 'Robert Downie Junior';
    this.displayButtonChangeHero = false;
  }

  changeAge(): void {
    this.age = 28;
    this.displayButtonChangeAge = false;
  }

}
