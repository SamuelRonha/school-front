import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FuncaoListComponent } from './funcao-list.component';

describe('FuncaoListComponent', () => {
  let component: FuncaoListComponent;
  let fixture: ComponentFixture<FuncaoListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FuncaoListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FuncaoListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
