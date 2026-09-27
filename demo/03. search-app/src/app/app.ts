import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // State
  // 1. Keyword
  readonly keyword = signal('');

  // 2. Results
  readonly results = signal<string[]>([]);

  // 3. Is Busy
  readonly isBusy = signal(false);
  

  // Actions

}
