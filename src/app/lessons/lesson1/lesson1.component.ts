import { Component, OnInit } from '@angular/core';
import anime from 'animejs';

@Component({
  selector: 'app-lesson1',
  templateUrl: './lesson1.component.html',
  styleUrls: ['./lesson1.component.css']
})
export class Lesson1Component implements OnInit {
  public canvasSize = 600;
  public canvas = {
    position: 'relative',
    width: '600px',
    height: '400px',
    padding: '0px',
  }
  public footballStyle = {
    position: 'absolute',
    top: '50%',
    left: '0px',
    width: '64px',
    height: '64px',
    transform: 'translateY(-50%)',

  }
  constructor() { }

  simulate(){
    var cssProperties = anime({
      targets: '#football',
      translateX: 588,
      translateY: '-50%',
      easing: 'linear',
    });
  }

  reset(){
    var cssProperties = anime({
      targets: '#football',
      easing: 'linear',
      translateX: 0,
      translateY: '-50%',
    });
  }

  ngOnInit() {
  }

}
