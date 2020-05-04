import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasUsuarioComponent } from './graficas-usuario.component';

describe('GraficasUsuarioComponent', () => {
  let component: GraficasUsuarioComponent;
  let fixture: ComponentFixture<GraficasUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficasUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
