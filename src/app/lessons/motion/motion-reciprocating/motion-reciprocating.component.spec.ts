import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MotionReciprocatingComponent } from './motion-reciprocating.component';

describe('MotionReciprocatingComponent', () => {
  let component: MotionReciprocatingComponent;
  let fixture: ComponentFixture<MotionReciprocatingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MotionReciprocatingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MotionReciprocatingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
