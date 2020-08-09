import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryTutorialComponent } from './jquery-tutorial.component';

describe('JqueryTutorialComponent', () => {
  let component: JqueryTutorialComponent;
  let fixture: ComponentFixture<JqueryTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueryTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
