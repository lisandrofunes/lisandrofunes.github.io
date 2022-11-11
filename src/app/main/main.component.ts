import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';


@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

export class MainComponent implements OnInit{ 
  title = 'Your Receip';
  // stateOptions: any[];
 
  constructor(private titleService: Title) {
    this.titleService.setTitle($localize`${this.title}`);
    // this.stateOptions = [
    //   { label: 'Spanish', value: 'es'},
    //   { label: 'English', value: 'en'}
    // ]


    // translate.addLangs(['en', 'es']);
    // translate.setDefaultLang('en');
    
    // const browserLang:any = translate.getBrowserLang();
    // translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }

  ngOnInit(): void {

  }

  // onLanguageChange(item: any){
  //   this.translate.use(item.value);
  // }

  // switchLang(lang: string) {
  //   this.translate.use(lang);
  // }
  
}
