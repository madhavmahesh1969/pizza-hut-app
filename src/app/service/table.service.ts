import { Injectable } from '@angular/core';
import {Table} from '../model/table';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TableService {
  
  constructor(private http: Http) {}

  getTableData() {
      return this.http.get('assets/data/table-data.json')
                  .toPromise()
                  .then(res => <Table[]> res.json().data)
                  .then(data => { console.log(data); return data; });
  }

  getTableByID(table_id){
    return table_id;
  }
}
