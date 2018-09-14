import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LessonsComponent } from './lessons/lessons.component';
import { MotionLinearComponent } from './lessons/motion/linear/linear.component';
import { MotionRotaryComponent } from "./lessons/motion/rotary/rotary.component";
import { Lesson2Component } from './lessons/lesson2/lesson2.component';
import { MotionReciprocatingComponent } from './lessons/motion/motion-reciprocating/motion-reciprocating.component';
import { MotionOscillatingComponent } from './lessons/motion/motion-oscillating/motion-oscillating.component';

const routes: Routes = [
  { path: '', redirectTo: '/index.ts', pathMatch: 'full' },
  { path: 'index.ts', component: HomeComponent },
  { path: 'about.ts', component: AboutComponent },
  { path: 'lessons.ts', component: LessonsComponent },
  {
    path: 'lesson',
    component: LessonsComponent,
    children: [
      {path: '', redirectTo: 'lesson1.ts', pathMatch: 'full'}, 
      {path: 'motion/linear.ts', component: MotionLinearComponent}, 
      {path: 'motion/rotary.ts', component: MotionRotaryComponent}, 
      {path: 'motion/reciprocating.ts', component: MotionReciprocatingComponent}, 
      {path: 'motion/lesson2.ts', component: Lesson2Component}, 
      {path: 'motion/oscillating.ts', component: MotionOscillatingComponent}, 
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
