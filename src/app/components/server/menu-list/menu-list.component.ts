import { Component, OnInit } from '@angular/core';
import { Menu } from '../../../model/menu';
import { MenuService } from '../../../service/menu.service';
import { MenuCartService } from '../../../service/menu-cart.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss'],
  providers: [MenuService]
})
export class MenuListComponent implements OnInit {

    menu: Menu[];
    tableSelect: boolean;

    message: any;
    subscription: Subscription;
    
    constructor(private menuService: MenuService, private menuCartService:MenuCartService) { 
        // subscribe to home component messages
        this.subscription = this.menuCartService.getMessage().subscribe(message => { this.tableSelect = message; 
    console.log('this.tableSelect', this.tableSelect);    
    });
    }

    ngOnInit() {
        this.menuService.getMenuData().then(menu => this.menu = menu);
        this.tableSelectedOrNot();
    }

    tableSelectedOrNot(){
        this.tableSelect = this.menuCartService.tableSelectedOrNot();
    }
    ngOnDestroy() {
        // unsubscribe to ensure no memory leaks
        this.subscription.unsubscribe();
    }
}
