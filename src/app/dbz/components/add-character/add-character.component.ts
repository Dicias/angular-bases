import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-add-character',
  templateUrl: './add-character.component.html',
  styleUrl: './add-character.component.css'
})
export class AddCharacterComponent {
  //EventEmitter es un genérico que se utiliza con el decorador @Output();
  @Output()
  //El onNewCharacter es un evento ↓
  public onNewCharacter: EventEmitter<Character> = new EventEmitter();

  public character: Character = {
    name: '',
    power: 0
  }

  emitCharacter(): void{

    //debugger; -> es un breakpoint

    if (this.character.name.length === 0) return;

    this.onNewCharacter.emit(this.character);

    this.character = {name:'', power: 0}
  }
}
