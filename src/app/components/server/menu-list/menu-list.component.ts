import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../model/menu';
import { MenuService } from '../../../service/menu.service';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
  providers: [MenuService]
})
export class MenuListComponent implements OnInit {

    menu: Menu[];
    
    constructor(private menuService: MenuService) { }

    ngOnInit() {
        this.menuService.getMenuData().then(menu => this.menu = menu);
    }
}
