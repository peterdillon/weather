import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { WeatherComponent } from './weather/weather.component';
import { MoreLearningComponent } from './more-learning/more-learning.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    MoreLearningComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NoopAnimationsModule
  ],
  exports: [],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
