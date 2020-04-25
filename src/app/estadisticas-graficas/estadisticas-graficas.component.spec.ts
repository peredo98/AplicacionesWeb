import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EstadisticasGraficasComponent } from './estadisticas-graficas.component';

describe('EstadisticasGraficasComponent', () => {
  let component: EstadisticasGraficasComponent;
  let fixture: ComponentFixture<EstadisticasGraficasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EstadisticasGraficasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EstadisticasGraficasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
