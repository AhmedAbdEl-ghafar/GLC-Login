import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReqComponent } from './test-req.component';

describe('TestReqComponent', () => {
  let component: TestReqComponent;
  let fixture: ComponentFixture<TestReqComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestReqComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
