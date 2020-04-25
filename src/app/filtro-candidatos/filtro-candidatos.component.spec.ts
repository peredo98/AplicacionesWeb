import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCandidatosComponent } from './filtro-candidatos.component';

describe('FiltroCandidatosComponent', () => {
  let component: FiltroCandidatosComponent;
  let fixture: ComponentFixture<FiltroCandidatosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroCandidatosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroCandidatosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
