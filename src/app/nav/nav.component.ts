import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css'],
})
export class NavComponent implements OnInit {
  siteLanguage = 'English';
  siteLocale = 'en';

  languageList = [
    { code: 'en', label: 'English' },
    { code: 'fr', label: 'Français' },
    { code: 'de', label: 'Deutsch' },
  ];

  ngOnInit(): void {
    this.siteLocale = window.location.pathname.split('/')[1];
    this.siteLanguage =
      this.languageList.find((lang) => lang.code === this.siteLocale)?.label ||
      'English';
  }
  onClick(siteLang: string): void {
    console.log('language is ', siteLang);
    this.siteLocale = window.location.pathname.split('/')[1];
    // change url TODO
    window.location.reload();
  }
}
