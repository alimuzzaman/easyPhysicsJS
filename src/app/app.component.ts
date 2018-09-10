import { Component, NgModule } from '@angular/core';
import anime from 'animejs';
import jQuery from 'jquery';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  imports: [NgbModule.forRoot()],
  declarations: [],
  bootstrap: []
})

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'easyPhysics';
  constructor() {
  }

  ngAfterViewInit() {

    var duration = anime({
      targets: 'img',
      translateX: {
        value: 250,
        duration: 800
      },
      rotate: {
        value: 360,
        duration: 1800,
        easing: 'easeInOutSine'
      },
      scale: {
        value: 2,
        duration: 1600,
        delay: 800,
        easing: 'easeInOutQuart'
      },
      delay: 250
    });

  }

}
