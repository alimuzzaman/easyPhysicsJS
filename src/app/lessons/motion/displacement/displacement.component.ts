import { Component, OnInit, ElementRef, ViewChild, Renderer2, Directive, Input, SimpleChanges, OnChanges } from '@angular/core';
import * as Matter from 'matter-js';
import { Router, ActivatedRoute } from '@angular/router';
import anime from 'animejs';

@Component({
    selector: 'app-displacement',
    templateUrl: './displacement.component.html',
    styleUrls: ['./displacement.component.css']
})
export class DisplacementComponent  {
    @ViewChild('matterCanvas') matterCanvas: ElementRef;

    public canvas = {
        position: 'relative',
        width: '600px',
        height: '600px',
        padding: '0px',
      }

    public cssProperties;
    public eqChanged = [];

    public angle = 0;
    public initialVelocity = 0;
    public time = 5.477225575051661;
    public acceleration = 20;
    public displacement = 300;


    public v = {};
    public timer = 0;
    public timePrev = 0;
    public timeEleps = 0;

    public ball: Matter.Body;

    public xyz;
    constructor(private activatedRoute: ActivatedRoute, private router: Router) { }


    stop() {
        let _this = this;
        let url: string = this.router.url.toString();
        this.router.navigate(['lessons.ts']).then(function(){
          _this.router.navigate([url]);
        });
    }

    start() {
        anime.easings['myCustomEasingName'] = (_t, x, y, z) => {
            var r = this.angle,
                u = this.initialVelocity,
                t = this.time,
                a = this.acceleration,
                s = this.displacement;
            var relativeTime = t * _t;
            console.log(_t, x, y, z)
            return (u * relativeTime + 0.5 * a * relativeTime * relativeTime) / s;
        }
        var rad = this.angle * Math.PI / 180;
        var X = Math.cos(rad) * this.displacement + 0;
        var Y = Math.sin(rad) * this.displacement + 0;

        this.cssProperties = anime({
          targets: '#football',
          left: Math.cos(- this.angle * Math.PI / 180) * this.displacement + 300,
          top: Math.sin(- this.angle * Math.PI / 180) * this.displacement + 300,
          easing: 'myCustomEasingName',
          duration: this.time * 1000,
        });
        
    }

    calculateValue(removed) {
        var u = this.initialVelocity,
            t = this.time,
            a = this.acceleration,
            s = this.displacement;
        switch (removed) {
            case 'time':
                //   t = ?
                this.time = (-u + Math.sqrt(u * u + 2 * a * s)) / a;
                break;
            case 'initialVelocity':
                // u = ?
                this.initialVelocity = s / t - 0.5 * a * t;
                break;
            case 'acceleration':
                //   a = ?
                this.acceleration = 2 * s / (t * t) - 2 * u / t;
                break;
            case 'displacement':
                //   s = ?
                this.displacement = u * t + 0.5 * a * t * t ;
                break;

            default:
                break;
        }
    }

}
