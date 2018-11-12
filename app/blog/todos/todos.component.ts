import { Component, OnInit } from '@angular/core';
import { BlogService } from '../blog.service';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {
  todos;

  constructor(private blogService: BlogService) { }

  ngOnInit() {
    this.blogService.getToDos().subscribe(
      todos => this.todos = todos
    );
  }

}
