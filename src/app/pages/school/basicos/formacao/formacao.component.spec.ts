import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacaoComponent } from './formacao.component';

describe('FormacaoComponent', () => {
  let component: FormacaoComponent;
  let fixture: ComponentFixture<FormacaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormacaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
