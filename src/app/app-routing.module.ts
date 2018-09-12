import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { LessonsComponent } from './lessons/lessons.component';
import { Lesson1Component } from './lessons/lesson1/lesson1.component';
import { Lesson2Component } from './lessons/lesson2/lesson2.component';

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
      {path: 'lesson1.ts', component: Lesson1Component}, 
      {path: 'lesson2.ts', component: Lesson2Component}, 
    ]
  },
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
