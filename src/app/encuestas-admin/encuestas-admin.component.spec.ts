import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EncuestasAdminComponent } from './encuestas-admin.component';

describe('EncuestasAdminComponent', () => {
  let component: EncuestasAdminComponent;
  let fixture: ComponentFixture<EncuestasAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EncuestasAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EncuestasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
