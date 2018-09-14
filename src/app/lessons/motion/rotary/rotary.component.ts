import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import anime from 'animejs';

@Component({
  selector: 'app-rotary',
  templateUrl: './rotary.component.html',
  styleUrls: ['./rotary.component.css']
})
export class MotionRotaryComponent implements OnInit {
  public radius: number = 150;
  public velocity: number = 100;
  public time: number;
  public canvas = {
    position: 'relative',
    width: '600px',
    height: '600px',
    padding: '0px',
  }

  public football = {
    'left': '150px',
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    var cssProperties = anime({
      targets: '#football',
      left: (300 - this.radius) + 'px',
      easing: 'linear',
      duration: 0,
    });
  }

  simulate(){
    // this.time = this.distance / this.velocity;
    this.football.left = (300 - this.radius) + 'px';

    var cssProperties = anime({
      targets: '#rotator',
      rotate: 360,
      easing: 'linear',
      loop: true,
      duration: 2 * 22/7 * this.radius / this.velocity * 1000,
    });
  }

  reset(){
    let _this = this;
    let url: string = this.router.url.toString();
    this.router.navigate(['lessons.ts']).then(function(){
      _this.router.navigate([url]);
    });
  }
}
