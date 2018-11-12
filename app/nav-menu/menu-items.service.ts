import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MenuItemsService {

  constructor() { }

  getMenuItems() {
    return [
      { link: '/',        icon: 'home',         label: 'Home'             },
      { link: '/table',   icon: 'table_chart',  label: 'Periodic Table'   },
      { link: '/list',    icon: 'perm_media',   label: 'File List'        },
      { link: '/panel',   icon: 'payment',      label: 'Expansion Panel'  },
      { link: '/albums',  icon: 'image',        label: 'Albums'           },

    ];
  }
}
