import { Component, OnInit } from '@angular/core';
import { MenuItemsService } from '../nav-menu/menu-items.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  menuItems;

  constructor(private menuService: MenuItemsService, private router: Router) { }

  ngOnInit() {
    this.menuItems = this.menuService.getMenuItems();
  }

  navigate(location) {
    this.router.navigate([location]);
  }

}
