import { Component } from '@angular/core';

import { Prediction } from './model/prediction';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  predict: Prediction;
}
