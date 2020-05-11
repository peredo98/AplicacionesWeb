import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasAdmin3Component } from './graficas-admin3.component';

describe('GraficasAdmin3Component', () => {
  let component: GraficasAdmin3Component;
  let fixture: ComponentFixture<GraficasAdmin3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficasAdmin3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasAdmin3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
