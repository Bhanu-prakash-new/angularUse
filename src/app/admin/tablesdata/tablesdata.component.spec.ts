import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablesdataComponent } from './tablesdata.component';

describe('TablesdataComponent', () => {
  let component: TablesdataComponent;
  let fixture: ComponentFixture<TablesdataComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablesdataComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablesdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
