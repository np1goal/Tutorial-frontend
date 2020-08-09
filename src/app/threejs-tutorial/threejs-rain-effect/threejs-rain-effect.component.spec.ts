import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsRainEffectComponent } from './threejs-rain-effect.component';

describe('ThreejsRainEffectComponent', () => {
  let component: ThreejsRainEffectComponent;
  let fixture: ComponentFixture<ThreejsRainEffectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreejsRainEffectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsRainEffectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
