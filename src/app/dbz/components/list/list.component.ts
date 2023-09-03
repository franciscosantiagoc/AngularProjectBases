import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public charactersList: Character[] = [];

  @Output()
  public onRemoveID: EventEmitter<number> = new EventEmitter;

  onDeleteCharacter = (index: number):void => {
    this.onRemoveID.emit(index);
  }
}
