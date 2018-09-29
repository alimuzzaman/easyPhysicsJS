import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-canvas',
  inputs: ['canvas'],
  templateUrl: './canvas.component.html',
  styleUrls: ['./canvas.component.css']
})
export class CanvasComponent implements OnInit {
  @Input() canvas = {
    position: 'relative',
    width: '600px',
    height: '600px',
    padding: '0px',
  };

  constructor( ) {
  }

  ngOnInit() {
  }

}
