import { Component, OnInit } from '@angular/core';
import { MenuComboService } from '../../../service/menu-combo.service';

@Component({
  selector: 'app-app-menu-scroller',
  templateUrl: './app-menu-scroller.component.html',
  styleUrls: ['./app-menu-scroller.component.scss'],
  providers: [MenuComboService]
})
export class AppMenuScrollerComponent implements OnInit {
comboMenuData: any;
  constructor(private menuComboService: MenuComboService) { }

  ngOnInit() {
    this.menuComboService.getMenuComboData().then(menu => this.comboMenuData = menu);
  }

}
