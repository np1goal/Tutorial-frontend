import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ScssSassTutorialComponent } from './scss-sass-tutorial.component';

describe('ScssSassTutorialComponent', () => {
  let component: ScssSassTutorialComponent;
  let fixture: ComponentFixture<ScssSassTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ScssSassTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ScssSassTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
