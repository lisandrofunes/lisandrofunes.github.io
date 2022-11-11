import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'PortfolioAngular';

  constructor(
    public translate: TranslateService
  ) {
    translate.addLangs(['es', 'en']);

    // this.stateOptions = [
    //   { label: 'Español', value: 'es' },
    //   { label: 'English', value: 'en'}
    // ]

    translate.setDefaultLang('es');
  }
  // stateOptions: any[]
}