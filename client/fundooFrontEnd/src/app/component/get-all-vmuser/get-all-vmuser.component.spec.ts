import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GetAllVMUserComponent } from './get-all-vmuser.component';

describe('GetAllVMUserComponent', () => {
  let component: GetAllVMUserComponent;
  let fixture: ComponentFixture<GetAllVMUserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GetAllVMUserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GetAllVMUserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
