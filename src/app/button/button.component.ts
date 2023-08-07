import { Component } from '@angular/core';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent {

  faCoffee = faCoffee;
  fas = fas;

  icons = ["house", "envelope", "star", "image", "heart", "file", "bell", "bolt", "ghost", "car", "book", "fire", "sun", "bug", "fish"];
  i: number = 0;

  showNewIcon(): void {
    setTimeout(() => {
      this.i = Math.floor(Math.random() * 15);
    }, 3000)
  }
}
