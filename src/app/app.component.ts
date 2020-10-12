import { Component } from '@angular/core';
import arrayWords from '../utils/words';
import arrayCountries from '../utils/countries';
import countries from '../utils/countries';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;

  countries = [];
  climit = 20;

  handleSlideChange(newLimit: number) {
    this.limit = newLimit;
  }

  generate() {
    this.words = arrayWords.slice(0, this.limit).join(' ');
  }

  generateCountries() {
    for (let i = 0; i < this.climit; i++) {
      let myRandom = Math.floor(Math.random() * 200) + 1;
      this.climit = myRandom;
    }
    this.words = countries.slice(0, this.climit).join(' ');
  }
}
