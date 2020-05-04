import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FechasAdminComponent } from './fechas-admin.component';

describe('FechasAdminComponent', () => {
  let component: FechasAdminComponent;
  let fixture: ComponentFixture<FechasAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FechasAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FechasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
