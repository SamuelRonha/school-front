import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormacaoListComponent } from './formacao-list.component';

describe('FormacaoListComponent', () => {
  let component: FormacaoListComponent;
  let fixture: ComponentFixture<FormacaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormacaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormacaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
