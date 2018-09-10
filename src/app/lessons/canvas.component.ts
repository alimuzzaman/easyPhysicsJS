import { Component, OnInit, ElementRef, EventEmitter, Input, Output, NgZone, Renderer } from '@angular/core';

@Component({
  selector: 'app-canvas',
  inputs: ['canvas'],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  @Input() canvas;

  constructor( readonly elementRef: ElementRef, private ngZone: NgZone, private renderer: Renderer) {
    console.log(renderer)
  }

  ngOnInit() {
    var textNode = this.elementRef.nativeElement.childNodes[0];
    // console.log(this.elementRef, textNode);
    console.log(this.elementRef.nativeElement.innerHTML)
  }

}
