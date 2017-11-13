import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'brower-event-experiment',
  templateUrl: './brower-event-experiment.component.html',
  styleUrls: ['./brower-event-experiment.component.css']
})
export class BrowerEventExperimentComponent implements OnInit {

  hoverSelection: HTMLElement;

  ngOnInit() {
    this.hoverSelection = document.getElementById('hoverId');
  }

}
