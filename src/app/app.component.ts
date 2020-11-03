import { Component } from '@angular/core';
import {Menu} from './menu/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angular-Menu';
  navItems: Menu[] = [
    {
      name : 'link 1',
      submenus : [ {name : 'submenu 1'}],
    },
    {
      name : 'link 2',
      submenus : [ {
        name : 'submenu 2',
        submenus : [ {
          name : 'submenu 3'
        }],
      }],
    },
    {
      name : 'link 3',
      submenus : [ {name : 'submenu 4'}],
    },
    {
      name : 'link 4',
    },
    {
      name : 'link 5',
      submenus : [ {
        name : 'submenu 5',
        submenus : [ {
          name : 'submenu 6'
        }],
      }],
    },
  ];
  select(event) {
    console.log(event);
  }
}
