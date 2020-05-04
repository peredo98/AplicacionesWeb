import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContestarPreguntaComponent } from './contestar-pregunta.component';

describe('ContestarPreguntaComponent', () => {
  let component: ContestarPreguntaComponent;
  let fixture: ComponentFixture<ContestarPreguntaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContestarPreguntaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContestarPreguntaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
