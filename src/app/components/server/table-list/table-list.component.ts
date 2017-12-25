import { Component, OnInit } from '@angular/core';
import { TableService } from '../../../service/table.service';
import { Table } from '../../../model/table';
@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.scss'],
  providers: [TableService]
})
export class TableListComponent implements OnInit {

tableData: Table[];

  constructor(private tableService: TableService) { }

  ngOnInit() {
    this.tableService.getTableData().then(table => this.tableData = table);
  }

}
