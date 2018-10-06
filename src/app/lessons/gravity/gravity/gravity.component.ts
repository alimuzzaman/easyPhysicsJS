import { Component, OnInit, ElementRef, ViewChild, Renderer2, Directive, Input, SimpleChanges, OnChanges } from '@angular/core';
import * as Matter from 'matter-js';
import { Router, ActivatedRoute } from '@angular/router';
import anime from 'animejs';


@Component({
    selector: 'app-gravity',
    templateUrl: './gravity.component.html',
    styleUrls: ['./gravity.component.css']
})
export class GravityComponent {

    /**
     * Force at witch m1 and m2 are pulled.
     */
    public F:number     = 0;
    public G:number     = 6.673 * Math.pow(10, -11);
    public m1:number    = 99e15;
    public m2:number    = 99e15;
    public d:number     = 1000;
    public t:number     = 0;
    public a1:number    = 0;
    public a2:number    = 0;
    public v1:number    = 0;
    public v2:number    = 0;


    @ViewChild('matterCanvas') matterCanvas: ElementRef;
    @ViewChild('football1') Efootball1: ElementRef;
    @ViewChild('football2') Efootball2: ElementRef;

    public canvas = {
        position: 'relative',
        width: '600px',
        _width: 600,
        height: '600px',
        _height: 600,
        padding: '0px',
    }

    public football1 = {
        left: '0px',
    }
    public football2 = {
        left: 'initial',
        right: '00px',
    }

    constructor(private activatedRoute: ActivatedRoute, private router: Router) { }

    ngOnInit(){
        this.calculateValue();

    }

    stop() {
        let _this = this;
        let url: string = this.router.url.toString();
        this.router.navigate(['lessons.ts']).then(function () {
            _this.router.navigate([url]);
        });
    }

    start() {







        // return;
        this.football1.left = '0px';
        this.football2.right = '0px';
        this.calculateValue();
        anime.easings['easing1'] = (_t) => {
            var relativeTime = this.t * _t;
            return (0.5 * this.a1 * relativeTime * relativeTime) / this.d;
        }
        anime({
          targets: '#football1',
          left: 0.5 * this.a1 * this.t * this.t,
          easing: 'easing1',
          duration: this.t * 1000,
        });

        anime.easings['easing2'] = (_t) => {
            var relativeTime = this.t * _t;
            return (0.5 * this.a2 * relativeTime * relativeTime) / this.d;
        }
        anime({
          targets: '#football2',
          right: 0.5 * this.a2 * this.t * this.t,
          easing: 'easing2',
          duration: this.t * 1000,
        });
    }

    calculateValue(removed?) {
        this.canvas._width = this.d;
        this.F = (this.G * this.m1 * this.m2) / (this.d * this.d);
        this.a1 = this.F / this.m1;
        this.a2 = this.F / this.m2;
        this.t = Math.sqrt( 2 * this.d / ( this.a1 + this.a2 ) );

    }

}
