import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  get title(): string {
    return this._title;
  }

  set title(value: string) {
    this._title = value;
  }
  private _title: string = 'Collator';
}
