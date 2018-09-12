import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import { ActivatedRoute, Router } from '@angular/router';

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

  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  simulate(){
    var cssProperties = anime({
      targets: '#football',
      translateX: 588,
      translateY: '-50%',
      easing: 'linear',
    });
  }


  reset(){
    let _this = this;
    let url: string = this.router.url.toString();
    this.router.navigate(['lessons.ts']).then(function(){
      _this.router.navigate([url]);
    });
  }

  ngOnInit() {
  }

}
