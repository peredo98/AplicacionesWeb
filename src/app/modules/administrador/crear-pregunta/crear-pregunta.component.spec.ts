import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearPreguntaComponent } from './crear-pregunta.component';

describe('CrearPreguntaComponent', () => {
  let component: CrearPreguntaComponent;
  let fixture: ComponentFixture<CrearPreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearPreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
