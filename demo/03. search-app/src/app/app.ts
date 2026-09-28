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
  setKeyword(value: string) {
    this.keyword.set(value);
  }

  search() {
    console.log('Search Started', this.keyword());
    const searchWord = this.keyword();
    this.isBusy.set(true);
    this.results.set([]);

    setTimeout(() => {
      this.isBusy.set(false);
      this.results.set([
        searchWord.toUpperCase(), 
        searchWord.toLowerCase(), 
        `* ${searchWord} *`
      ]);
      console.log('Search Completed');
    }, 3000);

  }
}
