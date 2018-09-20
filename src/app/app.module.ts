import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LessonsComponent } from './lessons/lessons.component';
import { MotionLinearComponent } from './lessons/motion/linear/linear.component';
import { Lesson2Component } from './lessons/lesson2/lesson2.component';
import { CanvasComponent } from './lessons/canvas.component';
import { MotionRotaryComponent } from "./lessons/motion/rotary/rotary.component";
import { MotionReciprocatingComponent } from './lessons/motion/motion-reciprocating/motion-reciprocating.component';
import { MotionOscillatingComponent } from './lessons/motion/motion-oscillating/motion-oscillating.component';
import { DisplacementComponent } from './lessons/motion/displacement/displacement.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    LessonsComponent,
    MotionLinearComponent,
    Lesson2Component,
    CanvasComponent,
    MotionRotaryComponent,
    MotionReciprocatingComponent,
    MotionOscillatingComponent,
    DisplacementComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
