import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReguserComponent } from './reguser.component';

describe('ReguserComponent', () => {
  let component: ReguserComponent;
  let fixture: ComponentFixture<ReguserComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ReguserComponent]
    });
    fixture = TestBed.createComponent(ReguserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
