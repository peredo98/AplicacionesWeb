import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEncuestasUsuarioComponent } from './lista-encuestas-usuario.component';

describe('ListaEncuestasUsuarioComponent', () => {
  let component: ListaEncuestasUsuarioComponent;
  let fixture: ComponentFixture<ListaEncuestasUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEncuestasUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEncuestasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
