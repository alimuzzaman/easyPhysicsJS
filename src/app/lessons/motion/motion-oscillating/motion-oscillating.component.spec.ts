import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionOscillatingComponent } from './motion-oscillating.component';

describe('MotionOscillatingComponent', () => {
  let component: MotionOscillatingComponent;
  let fixture: ComponentFixture<MotionOscillatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotionOscillatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotionOscillatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
