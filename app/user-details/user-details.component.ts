import { Component, OnInit } from '@angular/core';
import { SearchGithubService } from '../search-github.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent implements OnInit {
  user: any;

  constructor(private searchService: SearchGithubService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    const id = this.route.snapshot.params.id;
    this.searchService.getUserById(id).subscribe(
      user => this.user = user
    );
  }

  navigateBack() {
    this.router.navigate(['search-github']);
  }

}
