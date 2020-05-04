import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GraficasAdminComponent } from './graficas-admin.component';

describe('GraficasAdminComponent', () => {
  let component: GraficasAdminComponent;
  let fixture: ComponentFixture<GraficasAdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GraficasAdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GraficasAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
