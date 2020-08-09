import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsBackgroundLinesComponent } from './threejs-background-lines.component';

describe('ThreejsBackgroundLinesComponent', () => {
  let component: ThreejsBackgroundLinesComponent;
  let fixture: ComponentFixture<ThreejsBackgroundLinesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreejsBackgroundLinesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsBackgroundLinesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
