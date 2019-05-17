import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesurnameComponent } from './namesurname.component';

describe('NamesurnameComponent', () => {
  let component: NamesurnameComponent;
  let fixture: ComponentFixture<NamesurnameComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesurnameComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesurnameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
