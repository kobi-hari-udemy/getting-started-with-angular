import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  // State
  readonly colorOptions = signal(['Cobalt', 'Chacoal', 'Crimson', 'Forest', 'Plum']);
  readonly fontOptions = signal(['Georgia', 'Arial', 'Verdana', 'Trebuchet', 'Courier New']);
  readonly sizeOptions = signal(['14px', '18px', '24px', '30px', '36px']);

  readonly selectedColor = signal(this.colorOptions()[0]);
  readonly selectedFont = signal(this.fontOptions()[0]);
  readonly selectedSize = signal(this.sizeOptions()[0]);

  // Actions
  selectColor(value: string) {
    this.selectedColor.set(value);
  }

  selectFont(value: string) {
    this.selectedFont.set(value);
  }

  selectSize(value: string) {
    this.selectedSize.set(value);
  }
}
