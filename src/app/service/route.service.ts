import { Injectable } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable()
export class RouteService {

  constructor(private _router: Router ) { }
  getCurrentRoute(){
    console.log('this._router.url',this._router.url);
    return this._router.url;
  }
}
