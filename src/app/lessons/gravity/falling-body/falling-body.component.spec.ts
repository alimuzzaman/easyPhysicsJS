import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FallingBodyComponent } from './falling-body.component';

describe('FallingBodyComponent', () => {
  let component: FallingBodyComponent;
  let fixture: ComponentFixture<FallingBodyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FallingBodyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FallingBodyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
