import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CandidatoPropuestasComponent } from './candidato-propuestas.component';

describe('CandidatoPropuestasComponent', () => {
  let component: CandidatoPropuestasComponent;
  let fixture: ComponentFixture<CandidatoPropuestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CandidatoPropuestasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CandidatoPropuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
