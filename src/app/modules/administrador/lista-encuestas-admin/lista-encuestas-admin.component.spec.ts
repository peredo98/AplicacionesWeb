import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEncuestasAdminComponent } from './lista-encuestas-admin.component';

describe('ListaEncuestasAdminComponent', () => {
  let component: ListaEncuestasAdminComponent;
  let fixture: ComponentFixture<ListaEncuestasAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaEncuestasAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaEncuestasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
