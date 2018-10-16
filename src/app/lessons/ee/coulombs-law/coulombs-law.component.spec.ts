import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CoulombsLawComponent } from './coulombs-law.component';

describe('CoulombsLawComponent', () => {
  let component: CoulombsLawComponent;
  let fixture: ComponentFixture<CoulombsLawComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CoulombsLawComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CoulombsLawComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
