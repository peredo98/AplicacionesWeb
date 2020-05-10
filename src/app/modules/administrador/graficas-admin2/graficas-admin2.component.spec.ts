import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasAdmin2Component } from './graficas-admin2.component';

describe('GraficasAdmin2Component', () => {
  let component: GraficasAdmin2Component;
  let fixture: ComponentFixture<GraficasAdmin2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficasAdmin2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasAdmin2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
