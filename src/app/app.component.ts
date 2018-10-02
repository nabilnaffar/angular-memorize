import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  state = {
    isFlipped: false,
    isMatched: null,
  };

  public clicked() {
    this.state.isFlipped = true;
    (!!Math.floor(Math.random() * Math.floor(2))) ? this.matched() : this.unmatched();
  }

  private matched() {
    setTimeout(() => {
      this.state.isMatched = true;
      this.reset();
    }, 1000);
  }

  private unmatched() {
    setTimeout(() => {
      this.state.isMatched = false;
      this.reset();
    }, 1000);
  }

  private reset() {
    setTimeout(() => {
      this.state.isFlipped = false;
      this.state.isMatched = null;
    }, 1000);
  }
}
