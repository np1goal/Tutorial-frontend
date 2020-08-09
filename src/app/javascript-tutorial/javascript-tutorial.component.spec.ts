import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JavascriptTutorialComponent } from './javascript-tutorial.component';

describe('JavascriptTutorialComponent', () => {
  let component: JavascriptTutorialComponent;
  let fixture: ComponentFixture<JavascriptTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JavascriptTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JavascriptTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
