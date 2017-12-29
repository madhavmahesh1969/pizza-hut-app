import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Menu } from '../model/menu';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuComboService {

  constructor(private http: Http) {}

  getMenuComboData() {
      return this.http.get('assets/data/menu-combo.json')
                  .toPromise()
                  .then(res => <Menu[]> res.json().data)
                  .then(data => { console.log(data); return data; });
  }

  getMenuComboByID(menu_id){
    return menu_id;
  }
}
