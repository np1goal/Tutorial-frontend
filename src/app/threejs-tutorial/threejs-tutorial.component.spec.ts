import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsTutorialComponent } from './threejs-tutorial.component';

describe('ThreejsTutorialComponent', () => {
  let component: ThreejsTutorialComponent;
  let fixture: ComponentFixture<ThreejsTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreejsTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
