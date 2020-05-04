import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestarEncuestaComponent } from './contestar-encuesta.component';

describe('ContestarEncuestaComponent', () => {
  let component: ContestarEncuestaComponent;
  let fixture: ComponentFixture<ContestarEncuestaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestarEncuestaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestarEncuestaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
