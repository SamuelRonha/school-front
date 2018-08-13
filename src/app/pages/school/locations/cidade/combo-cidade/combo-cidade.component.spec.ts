import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComboCidadeComponent } from './combo-cidade.component';

describe('ComboCidadeComponent', () => {
  let component: ComboCidadeComponent;
  let fixture: ComponentFixture<ComboCidadeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComboCidadeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComboCidadeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
