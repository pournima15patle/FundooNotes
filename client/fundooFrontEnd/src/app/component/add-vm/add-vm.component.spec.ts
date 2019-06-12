import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddVMComponent } from './add-vm.component';

describe('AddVMComponent', () => {
  let component: AddVMComponent;
  let fixture: ComponentFixture<AddVMComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddVMComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddVMComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
