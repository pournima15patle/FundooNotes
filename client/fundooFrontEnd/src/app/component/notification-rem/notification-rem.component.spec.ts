import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotificationRemComponent } from './notification-rem.component';

describe('NotificationRemComponent', () => {
  let component: NotificationRemComponent;
  let fixture: ComponentFixture<NotificationRemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotificationRemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NotificationRemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
