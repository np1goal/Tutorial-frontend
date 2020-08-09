import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JsBomTutorialComponent } from './js-bom-tutorial.component';

describe('JsBomTutorialComponent', () => {
  let component: JsBomTutorialComponent;
  let fixture: ComponentFixture<JsBomTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JsBomTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JsBomTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
