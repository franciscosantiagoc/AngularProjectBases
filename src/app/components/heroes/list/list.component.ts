import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {
  public heroNames: string[] = [
    'Spiderman', 'Thor', 'Ironman', 'Capitain America'
  ];
  public heroDeleted: string | undefined = '';


  deleteLastItem (): void{
    let hero = this.heroNames.pop();
    this.heroDeleted = hero;
  }
}
