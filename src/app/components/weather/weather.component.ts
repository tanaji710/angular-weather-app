import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { WeatherService } from '../../services/weather.service';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrl: './weather.component.scss'
})
export class WeatherComponent {
  weatherForm = new FormGroup({
    location: new FormControl('')
  });
  weatherData!:any;

  constructor(private weatherService: WeatherService) {}

  onSubmit() {
    console.log(this.weatherForm);
    this.weatherService.getWeatherData(this.weatherForm.controls.location.value ?? 'sangli')
    .subscribe((result)=> {
      this.weatherData = result;
    })
  }
}
