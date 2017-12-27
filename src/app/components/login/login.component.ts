import { Component, OnInit } from '@angular/core';
import { TranslatePipe } from '../../pipe/translate.pipe';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  lang_data = [{"lang_code":"en",
                "lang_name":"English"
              },{"lang_code":"fr",
                "lang_name":"français"
              },{"lang_code":"hi",
                "lang_name":"हिंदी"
              },{"lang_code":"te",
                "lang_name":"తెలుగు"
              }];
  constructor(private translate: TranslateService) {
        // console.log('state',state);
        // console.log('Current path',state._routerState);
        
        
        translate.addLangs(["en", "te","fr", "hi"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|te|fr|hi/) ? browserLang : 'en');
  }

  getLangName(lang_code){
   for(var i=0; i<this.lang_data.length; ++i) {
     if(this.lang_data[i].lang_code === lang_code){
       return this.lang_data[i].lang_name;
     }
   }
  }

  ngOnInit() {
  }

}
