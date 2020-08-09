import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JqueryEffectsTutorialComponent } from './jquery-effects-tutorial.component';

describe('JqueryEffectsTutorialComponent', () => {
  let component: JqueryEffectsTutorialComponent;
  let fixture: ComponentFixture<JqueryEffectsTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JqueryEffectsTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JqueryEffectsTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
