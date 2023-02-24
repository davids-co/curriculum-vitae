import { Component } from '@angular/core';
import { Animations } from './utils/animations.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [Animations.rotateIn('3500ms', 45), Animations.slideInLeft('3500ms')]
})
export class AppComponent {
  title = 'personal-portfolio';

  flag = true;


  clickinMe() {
    this.flag = false;
  }
}
