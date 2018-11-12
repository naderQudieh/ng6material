import { Component, OnInit, Input } from '@angular/core';

export interface Person {
  name: string;
  age: number;
  destination: string;
  date: string;
}

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.scss']
})
export class PanelComponent implements OnInit {
  step = 0;
  progressBarStatus = 0;
  person: Person = {
    name: '',
    age: 0,
    destination: '',
    date: ''
  };

  constructor() { }

  ngOnInit() {
  }

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
    this.progressBarStatus = this.step * 33.3;
  }

  prevStep() {
    this.step--;
    this.progressBarStatus = this.step * 33.3;
  }

  like() {
    console.log('like');
  }

  share() {
    console.log('share');
  }

}
