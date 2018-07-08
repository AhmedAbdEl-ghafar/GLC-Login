import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestReq2Component } from './test-req2.component';

describe('TestReq2Component', () => {
  let component: TestReq2Component;
  let fixture: ComponentFixture<TestReq2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestReq2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestReq2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
