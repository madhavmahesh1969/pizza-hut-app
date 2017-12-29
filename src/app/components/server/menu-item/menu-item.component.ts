import { Component, OnInit, Input } from '@angular/core';
import {MenuCartService} from '../../../service/menu-cart.service';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.scss'],
  ///providers: [MenuCartService]
})
export class MenuItemComponent implements OnInit {
  @Input()
  menu_title: String;
  @Input()
  menu_price: String;
  @Input()
  menu_id: String;

  constructor(private menuCartService:MenuCartService) { }

  ngOnInit() {
  }
  updateMenuList(){
    this.menuCartService.setMenuToTheTable(this.menu_id);
    // send message to subscribers via observable subject
        this.menuCartService.sendMessage1('Message from Home Component to App Component!');
  }
}
