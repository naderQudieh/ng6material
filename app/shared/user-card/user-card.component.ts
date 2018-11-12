import { Component, OnInit, Input } from '@angular/core';
import { IGithubUser } from './github-user';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss']
})
export class UserCardComponent implements OnInit {
  
  @Input() avatarUrl: string;
  @Input() title: string;
  @Input() subtitle: string; 

  constructor() { }

  ngOnInit() { 
  }

}
