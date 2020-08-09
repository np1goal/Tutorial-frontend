import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SqlTutorialComponent } from './sql-tutorial.component';

describe('SqlTutorialComponent', () => {
  let component: SqlTutorialComponent;
  let fixture: ComponentFixture<SqlTutorialComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SqlTutorialComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SqlTutorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
