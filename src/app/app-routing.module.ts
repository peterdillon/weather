import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WeatherComponent } from './weather/weather.component';
import { MoreLearningComponent } from './more-learning/more-learning.component';

const routes: Routes = [
  { path: 'weather', component: WeatherComponent },
  { path: 'more', component: MoreLearningComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
