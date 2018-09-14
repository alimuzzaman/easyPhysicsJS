import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-linear',
  templateUrl: './linear.component.html',
  styleUrls: ['./linear.component.css']
})
export class MotionLinearComponent implements OnInit {
  public cssProperties;
  public distance: number = 600;
  public velocity: number = 200;
  public time: number;
  public canvas = {
    position: 'relative',
    width: '600px',
    height: '400px',
    padding: '0px',
  }

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  simulate(){
    this.time = this.distance / this.velocity;
    this.cssProperties = anime({
      targets: '#football',
      left: this.distance,
      easing: 'linear',
      duration: this.distance / this.velocity * 1000,
    });
  }


  reset(){
    this.cssProperties.restart().reset();
  }

  ngOnInit() {
  }

}
