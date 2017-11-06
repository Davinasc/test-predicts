import { Component, OnInit, Input, Output, EventEmitter, DoCheck } from '@angular/core';
import { Http } from '@angular/http';
import { FormGroup, FormControl, FormBuilder, FormArray, Validators } from '@angular/forms';

import { PredictService } from './../predict.service';
import { Produto } from './../model/produto';
import { Prediction } from '../model/prediction';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit, DoCheck  {

  form: FormGroup;
  @Input() predict: Prediction;
  @Output() predictChange: EventEmitter<any> = new EventEmitter();

  constructor(private fb: FormBuilder, private predictService: PredictService) { }

  ngOnInit() {
    this.form = this.fb.group({
      data: this.fb.array([
        this.fb.group({
          id: '',
          descricao: ''
        })
      ])
    });
  }

  onSubmit() {
    const produto = this.form.value;
    this.predictService.getPrediction(produto)
      .subscribe(res => this.predict = res);
  }

  ngDoCheck() {
    this.predictChange.next(this.predict);
  }

}
