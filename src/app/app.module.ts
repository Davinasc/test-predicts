import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { PredictService } from './predict.service';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { PredictListComponent } from './predict-list/predict-list.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    PredictListComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    NgbModule.forRoot(),
  ],
  providers: [PredictService],
  bootstrap: [AppComponent]
})
export class AppModule { }
