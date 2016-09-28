import { Component } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  template: `<h1>My First Angular 2 App</h1>`
})
export class AppComponent {
  constructor(private titleService: Title) {
    //test
  }
}
