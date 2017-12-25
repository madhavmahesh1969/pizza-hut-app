import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuCartService } from '../../../service/menu-cart.service';
@Component({
  selector: 'app-order-summary',
  templateUrl: './order-summary.component.html',
  styleUrls: ['./order-summary.component.scss']
})
export class OrderSummaryComponent implements OnInit {
  private table_id;x
  private sub;
  private orderSummaryData;
  private orderMenuCart;
  private selectedMenuData;
  constructor(private route: ActivatedRoute, private menuCartService: MenuCartService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       ///this.table_id = +params['table_id']; // (+) converts string 'id' to a number
       this.table_id = params['table_id'];
    });
    this.getOrderSeummaryByTableId();
    this.getOrderMenuCart();
  }
  
  getOrderSeummaryByTableId(){
    this.orderSummaryData = this.menuCartService.getSelectedMenuCartByTableId(this.table_id);
  }
  
  getOrderMenuCart(){
    this.orderMenuCart = this.menuCartService.getOrderMenuCart();
  }
  
  private ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
