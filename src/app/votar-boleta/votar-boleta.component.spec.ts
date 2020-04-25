import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { VotarBoletaComponent } from './votar-boleta.component';

describe('VotarBoletaComponent', () => {
  let component: VotarBoletaComponent;
  let fixture: ComponentFixture<VotarBoletaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VotarBoletaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VotarBoletaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
