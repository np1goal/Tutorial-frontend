import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsJsonTutorialComponent } from './js-json-tutorial.component';

describe('JsJsonTutorialComponent', () => {
  let component: JsJsonTutorialComponent;
  let fixture: ComponentFixture<JsJsonTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsJsonTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsJsonTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
