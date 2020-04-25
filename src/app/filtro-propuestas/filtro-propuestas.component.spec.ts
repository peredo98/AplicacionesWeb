import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroPropuestasComponent } from './filtro-propuestas.component';

describe('FiltroPropuestasComponent', () => {
  let component: FiltroPropuestasComponent;
  let fixture: ComponentFixture<FiltroPropuestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroPropuestasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroPropuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
