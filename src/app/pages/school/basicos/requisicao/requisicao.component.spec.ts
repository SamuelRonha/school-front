import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RequisicaoComponent } from './requisicao.component';

describe('RequisicaoComponent', () => {
  let component: RequisicaoComponent;
  let fixture: ComponentFixture<RequisicaoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RequisicaoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RequisicaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
