import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroEstadisticasComponent } from './filtro-estadisticas.component';

describe('FiltroEstadisticasComponent', () => {
  let component: FiltroEstadisticasComponent;
  let fixture: ComponentFixture<FiltroEstadisticasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroEstadisticasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroEstadisticasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
