import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AttachLabelComponent } from './attach-label.component';

describe('AttachLabelComponent', () => {
  let component: AttachLabelComponent;
  let fixture: ComponentFixture<AttachLabelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AttachLabelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AttachLabelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
