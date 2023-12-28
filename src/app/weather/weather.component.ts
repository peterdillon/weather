import { Component } from '@angular/core';
import { ReplaySubject, Subscription } from 'rxjs';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  temperatureDataList: number[] = [];
  inputTemperature = 0;
  temperatureSubject$ = new ReplaySubject<number>();
  replaySubscription: Subscription | undefined;

  ngOnInit() {}
  
  setTemperature() {
    const temperature = this.inputTemperature;
    this.temperatureSubject$.next(temperature);
  }
  setInputTemperature(event: Event) {
    const input = (event.target as HTMLInputElement).value;
    this.inputTemperature = parseInt(input);
  }
  addSubscription() {
    if (this.replaySubscription) {
      return;
    }
    this.temperatureDataList = [];
    this.replaySubscription = this.temperatureSubject$.subscribe((temperature) => {
      this.temperatureDataList.push(temperature);
    })
  }
  removeSubscription() {
    this.temperatureDataList = [];
    this.replaySubscription?.unsubscribe();
    this.replaySubscription = undefined;
  }
}
