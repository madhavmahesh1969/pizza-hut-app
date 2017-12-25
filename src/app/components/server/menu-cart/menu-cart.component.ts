import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-menu-cart',
  templateUrl: './menu-cart.component.html',
  styleUrls: ['./menu-cart.component.scss']
})
export class MenuCartComponent implements OnInit {
  @Input()
  cart_value: number;
  @Input()
  table_id: String;

  constructor() { }

  ngOnInit() {
    //this.cart_value = 5;
  }

}
