import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PropuestasComponent } from './propuestas.component';

describe('PropuestasComponent', () => {
  let component: PropuestasComponent;
  let fixture: ComponentFixture<PropuestasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PropuestasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PropuestasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
