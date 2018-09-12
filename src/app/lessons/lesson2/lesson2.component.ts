import { Component, OnInit } from '@angular/core';
import anime from 'animejs';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-lesson2',
  templateUrl: './lesson2.component.html',
  styleUrls: ['./lesson2.component.css']
})
export class Lesson2Component implements OnInit {

  public canvas = {
    position: 'relative',
    width: '600px',
    height: '400px',
    padding: '0px',
  }
  public footballStyle = {
    position: 'absolute',
    top: '0',
    left: '50%',
    width: '64px',
    height: '64px',
    transform: 'translateX(-50%)',

  }
  constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

  simulate(){
    var cssProperties = anime({
      targets: '#football',
      top: '100%',
      translateY: '50%',
      translateX: '-50%',
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
