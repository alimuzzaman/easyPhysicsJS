import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionRotaryComponent } from "./rotary.Component";

describe('MotionRotaryComponent', () => {
  let component: MotionRotaryComponent;
  let fixture: ComponentFixture<MotionRotaryComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotionRotaryComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotionRotaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
