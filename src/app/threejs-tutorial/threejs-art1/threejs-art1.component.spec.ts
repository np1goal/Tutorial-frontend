import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsArt1Component } from './threejs-art1.component';

describe('ThreejsArt1Component', () => {
  let component: ThreejsArt1Component;
  let fixture: ComponentFixture<ThreejsArt1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreejsArt1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsArt1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
