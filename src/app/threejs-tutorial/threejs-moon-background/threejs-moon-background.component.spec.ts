import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsMoonBackgroundComponent } from './threejs-moon-background.component';

describe('ThreejsMoonBackgroundComponent', () => {
  let component: ThreejsMoonBackgroundComponent;
  let fixture: ComponentFixture<ThreejsMoonBackgroundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreejsMoonBackgroundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsMoonBackgroundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
