import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ThreejsGeometryTypesComponent } from './threejs-geometry-types.component';

describe('ThreejsGeometryTypesComponent', () => {
  let component: ThreejsGeometryTypesComponent;
  let fixture: ComponentFixture<ThreejsGeometryTypesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ThreejsGeometryTypesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ThreejsGeometryTypesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
