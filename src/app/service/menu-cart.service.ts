import { Injectable } from '@angular/core';
import { MenuCart } from '../model/menu-cart';
//import { Subject }    from 'rxjs/Subject';

@Injectable()
export class MenuCartService {
  orderedMenuCart:any[];
  menuCart:MenuCart;
  selectedTableId: String;

  // // Observable string sources
  // private menuAddedToCart = new Subject<string>();
  // // Observable string streams
  // menuAdded$ = this.menuAddedToCart.asObservable();

  constructor() { 
    this.orderedMenuCart = [];
    this.menuCart = {
            table_id: '',
            server_id: '',
            menu_list: [],
            table_free: true
      };
  }

  setMenuToTheTable(menu_id){
    console.log('this.selectedTableId',this.selectedTableId);
    console.log('this.orderedMenuCart',this.orderedMenuCart);
    var position = 0;
    if(this.orderedMenuCart) {
      position = this.getSelectedMenuCartPosition();}
    //else{
      // this.menuCart = {
      //       table_id: this.selectedTableId,
      //       server_id: '',
      //       menu_list: []
      // };
      // this.orderedMenuCart = [];
    ///}
    console.log('this.menuCart',this.menuCart);
    //this.menuCart.menu_list.push(menu_id);
    console.log('this.orderedMenuCart[position]',this.orderedMenuCart[position]);
    this.orderedMenuCart[position].menu_list.push(menu_id);
    
    console.log('this.menuCart',this.menuCart);
  }

    // Service message commands
  // announceCart(mission: string) {
  //   this.menuAddedToCart.next(mission);
  // }

  setSelectedTableId(table_id){
    this.selectedTableId = table_id;
    ///If tablefree then add a new cart to thecart array
    if(this.checkTableFree(table_id)){ 
      console.log('entered');
            this.menuCart = {
            table_id: this.selectedTableId,
            server_id: '',
            menu_list: [],
            table_free: false
      };
      this.orderedMenuCart.push(this.menuCart);
    }
    console.log('data',this.selectedTableId);
  }
  checkTableFree(table_id){
    for(let i=0; i< this.orderedMenuCart.length;++i){
      if(this.orderedMenuCart[i].table_id === table_id){
        return false;
      }
    }
    return true;
  }
  getSelectedMenuCart(){
    for(let i=0; i< this.orderedMenuCart.length;++i){
      if(this.orderedMenuCart[i].table_id === this.selectedTableId){
        this.menuCart = this.orderedMenuCart[i];
      }
    }
  }
  getSelectedMenuCartPosition(){
    for(let i=0; i< this.orderedMenuCart.length;++i){
      if(this.orderedMenuCart[i].table_id === this.selectedTableId){
        return i;
      }
    }
  }

  getSelectedMenuCartByTableId(table_id){
    for(let i=0; i< this.orderedMenuCart.length;++i){
      if(this.orderedMenuCart[i].table_id === table_id){
        return this.orderedMenuCart[i];
      }
    }
  }

  getMenuCountByTableId(table_id){
    var menu_cart = this.getSelectedMenuCart();
    if(menu_cart){
      return this.menuCart.menu_list.length;
      //  return this.http.get('assets/data/table-data.json')
      //             .toPromise()
      //             .then(res => <Table[]> res.json().data)
      //             .then(data => { console.log(data); return data; });
    } else {
      return 0;
    }
  }

  getTableData() {
      // return this.http.get('assets/data/table-data.json')
      //             .toPromise()
      //             .then(res => <Table[]> res.json().data)
      //             .then(data => { console.log(data); return data; });
  }
  getOrderMenuCart(){
    return this.orderedMenuCart;
  }
}
