import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEncuestaComponent } from './form-encuesta.component';

describe('FormEncuestaComponent', () => {
  let component: FormEncuestaComponent;
  let fixture: ComponentFixture<FormEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
