import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('fun-with-angular');

  constructor() {
    console.log('Starting to run');
    setTimeout(() => {
      this.title.set('Hello World');
      console.log('Changing the title');
    }, 5000);

  }
}

// 1. Creates an instance of the component class
// 2. Adds a clone of the template to the Host element
// 3. Adds Bindings to the template