import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CssAnimationTutorialComponent } from './css-animation-tutorial.component';

describe('CssAnimationTutorialComponent', () => {
  let component: CssAnimationTutorialComponent;
  let fixture: ComponentFixture<CssAnimationTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CssAnimationTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CssAnimationTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
