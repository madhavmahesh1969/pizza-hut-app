import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Menu } from '../model/menu';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MenuService {

  constructor(private http: Http) {}

  getMenuData() {
      return this.http.get('assets/data/menu-data.json')
                  .toPromise()
                  .then(res => <Menu[]> res.json().data)
                  .then(data => { console.log(data); return data; });
  }

}
