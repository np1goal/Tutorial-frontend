import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Angular8TutorialComponent } from './angular8-tutorial.component';

describe('Angular8TutorialComponent', () => {
  let component: Angular8TutorialComponent;
  let fixture: ComponentFixture<Angular8TutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Angular8TutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Angular8TutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
