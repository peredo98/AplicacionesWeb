import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasUsuario2Component } from './graficas-usuario2.component';

describe('GraficasUsuario2Component', () => {
  let component: GraficasUsuario2Component;
  let fixture: ComponentFixture<GraficasUsuario2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficasUsuario2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasUsuario2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
