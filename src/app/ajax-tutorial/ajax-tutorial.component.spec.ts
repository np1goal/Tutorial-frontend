import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjaxTutorialComponent } from './ajax-tutorial.component';

describe('AjaxTutorialComponent', () => {
  let component: AjaxTutorialComponent;
  let fixture: ComponentFixture<AjaxTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjaxTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjaxTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
