import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'ironman';
  public age: number = 18;

  get capitalizedName():string{
    return 'Hola mundo'.toUpperCase();
  }

  getHeroDescription():string{
    return `${this.name} - ${this.age}`;
  }

  changeHero():string{
    this.name = 'Spiderman';
    return `${this.name}`;
  }
  changeAge():number{
    this.age = 25;
    return this.age;
  }
  resetData():void{
    this.name = 'ironman';
    this.age = 45;
  }
}
