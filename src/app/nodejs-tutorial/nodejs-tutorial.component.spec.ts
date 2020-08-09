import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejsTutorialComponent } from './nodejs-tutorial.component';

describe('NodejsTutorialComponent', () => {
  let component: NodejsTutorialComponent;
  let fixture: ComponentFixture<NodejsTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NodejsTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NodejsTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
