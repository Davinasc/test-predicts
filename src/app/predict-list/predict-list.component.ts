import { Component, OnInit, Input } from '@angular/core';

import { Prediction } from './../model/prediction';

@Component({
  selector: 'app-predict-list',
  templateUrl: './predict-list.component.html',
  styleUrls: ['./predict-list.component.css']
})
export class PredictListComponent implements OnInit {

  @Input() predict: Prediction;

  constructor() { }

  ngOnInit() {
  }

}
