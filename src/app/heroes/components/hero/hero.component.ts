import { Component } from '@angular/core';
import { NgIf, NgFor } from "@angular/common";

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age:  number = 45;

  get capitalizedName():string { //es un método que aparece como propiedad
    return this.name.toUpperCase();
  }

  getHeroDescription ():string { //Para marcar algún método pendiente puedes usar
    //TODO (esto marca que falta hacer algo en el método)

    return `${this.name} - ${this.age}`
  }

  changeHero():void {
    this.name = 'Spiderman'
  }

  changeAge():void{
    this.age = 18;
  }

  resetForm():void{
    this.name = 'ironman';
    this.age = 45
  }

}
