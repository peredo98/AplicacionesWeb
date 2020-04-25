import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestasCandidatoComponent } from './propuestas-candidato.component';

describe('PropuestasCandidatoComponent', () => {
  let component: PropuestasCandidatoComponent;
  let fixture: ComponentFixture<PropuestasCandidatoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropuestasCandidatoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropuestasCandidatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
