import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NewmodalpopupComponent } from './newmodalpopup.component';

describe('NewmodalpopupComponent', () => {
  let component: NewmodalpopupComponent;
  let fixture: ComponentFixture<NewmodalpopupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NewmodalpopupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NewmodalpopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
