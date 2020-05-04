import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechasUsuarioComponent } from './fechas-usuario.component';

describe('FechasUsuarioComponent', () => {
  let component: FechasUsuarioComponent;
  let fixture: ComponentFixture<FechasUsuarioComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechasUsuarioComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechasUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
