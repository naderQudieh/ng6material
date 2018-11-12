import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent implements OnInit {
  menuItems = [
    { link: 'posts', icon: 'view_list', label: 'Posts' },
    { link: 'users', icon: 'supervised_user_circle', label: 'Users' },
    { link: 'todos', icon: 'playlist_add_check', label: 'ToDo\'s' },
  ];
  activeLink: string;// = this.menuItems[0].label;

  constructor(private router: Router) {
    router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    )
      .subscribe(() => {
        const urlBlog = this.router.url.split('/')[1];
        if (urlBlog === 'blog') {
          const urlSegment = this.router.url.split('/')[2];
          this.activeLink = this.menuItems
            .find(lnk => lnk.link === urlSegment)
            .label;
        }
      });
  }

  ngOnInit() {
  }

}
