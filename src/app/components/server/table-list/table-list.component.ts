import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../service/table.service';
import { Table } from '../../../model/table';
import { Subscription } from 'rxjs/Subscription';
import { MenuCartService } from '../../../service/menu-cart.service';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
  providers: [TableService]
})
export class TableListComponent implements OnInit {

tableData: Table[];
message: any;
    subscription: Subscription;

  constructor(private tableService: TableService, private menuCartService: MenuCartService) {
    // subscribe to home component messages
        this.subscription = this.menuCartService.getMessage1().subscribe(message => { this.getTableData();
    
    });
   }

  ngOnInit() {
    this.getTableData();
  }
  getTableData(){
    this.tableService.getTableData().then(table => this.tableData = table);
    console.log('This.tabledata',this.tableData);
  }

}
