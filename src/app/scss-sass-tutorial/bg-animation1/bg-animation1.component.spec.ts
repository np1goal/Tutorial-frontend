import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BgAnimation1Component } from './bg-animation1.component';

describe('BgAnimation1Component', () => {
  let component: BgAnimation1Component;
  let fixture: ComponentFixture<BgAnimation1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BgAnimation1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BgAnimation1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
