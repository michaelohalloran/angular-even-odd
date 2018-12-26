import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {

  count: number = 0;
  interval;
  @Output() numberIncreased = new EventEmitter<number>();

  constructor() { }

  ngOnInit() {
  }

  onStartGame() {
    console.log('hit onStart');
    //emit event each second
    this.interval = setInterval(()=> {
      this.count++;
      this.numberIncreased.emit(this.count);
      // console.log('count: ', this.count);
    }, 1000);
  }

  onEndGame() {
    console.log('hit onEnd');
    //clearInterval
    clearInterval(this.interval);
  }

}
