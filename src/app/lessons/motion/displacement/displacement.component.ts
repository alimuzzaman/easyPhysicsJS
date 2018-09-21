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
        height: '400px',
        padding: '0px',
      }

    public cssProperties;
    public eqChanged = [];

    public angle = 0;
    public initialVelocity = 0;
    public time = 7.745966692414834;
    public acceleration = 20;
    public displacement = 600;


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
        anime.easings['myCustomEasingName'] = (_t) => {
            var u = this.initialVelocity,
                t = this.time,
                a = this.acceleration,
                s = this.displacement;
            var relativeTime = t * _t;
            console.log(relativeTime, u * relativeTime + 0.5 * a * relativeTime * relativeTime)
            return (u * relativeTime + 0.5 * a * relativeTime * relativeTime) / s;
        }
        this.cssProperties = anime({
          targets: '#football',
          left: this.displacement,
          easing: 'myCustomEasingName',
          duration: this.time * 1000,
        });
        
    }



    ngOnChanges(item: string) {
        // return;
        this.calculateValue();
        if(this.eqChanged.includes(item))
            return;
            
        if (this.eqChanged.length >= 3) {
            var removed = this.eqChanged.shift();
        }
        this.eqChanged.push(item);
        console.log(this.eqChanged);
    }

    calculateValue() {
        var u = this.initialVelocity,
            t = this.time,
            a = this.acceleration,
            s = this.displacement;
        var removed 
        switch (true) {
            case !this.eqChanged.includes('time'):
                //   t = ?
                this.time = (-u + Math.sqrt(u * u + 2 * a * s)) / a;
                break;
            case !this.eqChanged.includes('initialVelocity'):
                // u = ?
                this.initialVelocity = s / t - 0.5 * a * t;
                break;
            case !this.eqChanged.includes('acceleration'):
                //   a = ?
                this.acceleration = 2 * s / (t * t) - 2 * u / t;
                break;
            case !this.eqChanged.includes('displacement'):
                //   s = ?
                this.displacement = u * t + 0.5 * a * t * t ;
                break;

            default:
                break;
        }
    }

}
