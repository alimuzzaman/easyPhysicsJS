import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CircleVelocityComponent } from './circle-velocity.component';

describe('CircleVelocityComponent', () => {
  let component: CircleVelocityComponent;
  let fixture: ComponentFixture<CircleVelocityComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CircleVelocityComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CircleVelocityComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
