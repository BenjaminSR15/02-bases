import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
public heroNames: string[] = ['Spiderman','Ironman','Hulk','Thor']
public deleteHeroe?: string;

removeLastHeroe():void{
  this.deleteHeroe = this.heroNames.pop()
}

  resetListHeroe():void{
    this.heroNames=['Spiderman','Ironman','Hulk','Thor']
  }
}
