import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-canvas',
  inputs: ['canvas'],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  @Input() canvas;

  constructor( ) {
  }

  ngOnInit() {
  }

}
