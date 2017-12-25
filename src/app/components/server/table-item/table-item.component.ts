import { Component, OnInit, Input } from '@angular/core';
import { MenuCartService } from '../../../service/menu-cart.service';
@Component({
  selector: 'app-table-item',
  templateUrl: './table-item.component.html',
  styleUrls: ['./table-item.component.scss'],
//  providers:[MenuCartService]
})
export class TableItemComponent implements OnInit {
@Input()
tableImage: String;

@Input()
table_id: String;

@Input()
cart_value: number;

  constructor(private menuCartService: MenuCartService) { }

  ngOnInit() {
    //this.getMenuCountByTableId();
  }

  setSelectedTableId(){
    this.menuCartService.setSelectedTableId(this.table_id);
  }
  // getMenuCountByTableId(){
    
  //  this.cart_value = this.menuCartService.getMenuCountByTableId(this.table_id);
  //  console.log('this.cart_value',this.cart_value);
  // }
  
}
