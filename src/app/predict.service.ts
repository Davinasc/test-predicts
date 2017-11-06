import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';

import { Produto } from './model/produto';

@Injectable()
export class PredictService {

  constructor(private http: Http) { }

  getPrediction(produto) {
    return this.http.post('http://127.0.0.1:5000/predict_item', produto)
               .map(res => res.json());
  }
}
