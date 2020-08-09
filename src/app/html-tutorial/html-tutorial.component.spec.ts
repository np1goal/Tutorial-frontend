import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HtmlTutorialComponent } from './html-tutorial.component';

describe('HtmlTutorialComponent', () => {
  let component: HtmlTutorialComponent;
  let fixture: ComponentFixture<HtmlTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HtmlTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HtmlTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
