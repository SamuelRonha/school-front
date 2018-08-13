import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HoraAulaComponent } from './hora-aula.component';

describe('HoraAulaComponent', () => {
  let component: HoraAulaComponent;
  let fixture: ComponentFixture<HoraAulaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HoraAulaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HoraAulaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
