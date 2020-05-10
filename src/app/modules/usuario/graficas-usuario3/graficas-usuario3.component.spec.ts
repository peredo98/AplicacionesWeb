import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasUsuario3Component } from './graficas-usuario3.component';

describe('GraficasUsuario3Component', () => {
  let component: GraficasUsuario3Component;
  let fixture: ComponentFixture<GraficasUsuario3Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficasUsuario3Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasUsuario3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
