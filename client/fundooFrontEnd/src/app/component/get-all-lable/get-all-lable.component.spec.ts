import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllLableComponent } from './get-all-lable.component';

describe('GetAllLableComponent', () => {
  let component: GetAllLableComponent;
  let fixture: ComponentFixture<GetAllLableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllLableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllLableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
