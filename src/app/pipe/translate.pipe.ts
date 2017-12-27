// app/translate/translate.pipe.ts

import { Pipe, PipeTransform } from '@angular/core';
//import { TranslateService } from '../service/translate.service'; // our translate service
import {TranslateService} from '@ngx-translate/core';

@Pipe({
    name: 'translate',
    pure: false // impure pipe, update value when we change language
})

export class TranslatePipe implements PipeTransform {

	//constructor(private _translate: TranslateService) { }
	constructor(private translate: TranslateService) {
        translate.addLangs(["en", "fr"]);
        translate.setDefaultLang('en');

        let browserLang = translate.getBrowserLang();
        translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

	transform(value: string, args: any[]): any {
		if (!value) return;
		
		return this.translate.instant(value);
	}
}