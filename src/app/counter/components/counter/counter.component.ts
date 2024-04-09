import { Component, OnInit } from '@angular/core';




@Component({
  selector: 'app-counter',
  template: `<h3>Counter: {{counter}}</h3>

  <button class="btn btn-primary mx-2" (click)="increaseBy(+1)">+1</button>
  <button class="btn btn-outline-danger mx-2" (click)="resetBy()">Reset</button>
  <button class="btn btn-primary mx-2" (click)="decreateBy(+1)">-1</button>`
})



export class CounterComponent {
  public counter: number = 10;

  increaseBy (value: number):void{
   this.counter +=  value;
  }

  decreateBy (value: number):void {
   if(this.counter > 0){
    this.counter -= value
   return;
   }
  }
   resetBy ():void{
 this.counter = 10
   }
  constructor() { }

}
