import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowerEventExperimentComponent } from './brower-event-experiment/brower-event-experiment.component';

@NgModule({
  declarations: [
    AppComponent,
    BrowerEventExperimentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
