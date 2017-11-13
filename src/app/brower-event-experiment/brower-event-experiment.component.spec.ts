import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BrowerEventExperimentComponent } from './brower-event-experiment.component';

describe('BrowerEventExperimentComponent', () => {
  let component: BrowerEventExperimentComponent;
  let fixture: ComponentFixture<BrowerEventExperimentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BrowerEventExperimentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BrowerEventExperimentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
