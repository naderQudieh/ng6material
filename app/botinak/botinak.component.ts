import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-botinak',
  templateUrl: './botinak.component.html',
  styleUrls: ['./botinak.component.scss']
})
export class BotinakComponent implements OnInit {
  checked = false;

  constructor() { }

  ngOnInit() {
  }

  toggle() {
    this.checked = !this.checked;
  }

}
