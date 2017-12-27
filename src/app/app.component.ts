import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
//import { TranslateService }   from './service/translate.service';
///import { TRANSLATION_PROVIDERS }   from './service/translations';
///import {TranslateService} from '@ngx-translate/core';
////import { RouterStateSnapshot } from '@angular/router';
//import {RouteService} from './service/route.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
  //providers: [ RouteService]
})
export class AppComponent {
  title = 'app';
  currentRoute  = '';
  // public translatedText: string;
  //   public supportedLangs: any[];
  lang_data = [{"lang_code":"en",
                "lang_name":"English"
              },{"lang_code":"fr",
                "lang_name":"français"
              },{"lang_code":"hi",
                "lang_name":"हिंदी"
              },{"lang_code":"te",
                "lang_name":"తెలుగు"
              }];
              constructor() {}
  // constructor(private translate: TranslateService) {
  //       // console.log('state',state);
  //       // console.log('Current path',state._routerState);
        
        
  //       translate.addLangs(["en", "te","fr", "hi"]);
  //       translate.setDefaultLang('en');

  //       let browserLang = translate.getBrowserLang();
  //       translate.use(browserLang.match(/en|te|fr|hi/) ? browserLang : 'en');
  // }

  // getLangName(lang_code){
  //  for(var i=0; i<this.lang_data.length; ++i) {
  //    if(this.lang_data[i].lang_code === lang_code){
  //      return this.lang_data[i].lang_name;
  //    }
  //  }
  // }
    ngOnInit() {
      //this.currentRoute = this.routeService.getCurrentRoute();
    }
}
