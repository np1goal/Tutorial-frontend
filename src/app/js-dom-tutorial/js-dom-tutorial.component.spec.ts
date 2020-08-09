import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsDomTutorialComponent } from './js-dom-tutorial.component';

describe('JsDomTutorialComponent', () => {
  let component: JsDomTutorialComponent;
  let fixture: ComponentFixture<JsDomTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsDomTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsDomTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
