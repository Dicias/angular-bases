import { Component } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>Counter: {{counter}}</h3>

<button (click)="decreaseBy(1)">-1</button>
<button (click)="reset()" >reset</button>
<button (click)="increaseBy(1)" >+1</button>
`
})

export class CounterComponent {
  public counter = 10;
  public increaseBy = (value: number) =>{
    this.counter += value
  }
  public reset = () =>{
    this.counter = 10;
  }
  public decreaseBy = (value: number) =>{
    this.counter -= value
  }
}

