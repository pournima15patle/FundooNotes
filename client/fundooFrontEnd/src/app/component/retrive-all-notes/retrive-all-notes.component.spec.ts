import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetriveAllNotesComponent } from './retrive-all-notes.component';

describe('RetriveAllNotesComponent', () => {
  let component: RetriveAllNotesComponent;
  let fixture: ComponentFixture<RetriveAllNotesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetriveAllNotesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetriveAllNotesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
