import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
myApiKey = '15cd3d0b72774d169b6140618243006';
  constructor(private http: HttpClient) { }

  getWeatherData(location: string) {
    return this.http.get('https://api.weatherapi.com/v1/current.json?q='+location+'&key='+this.myApiKey)
  }
}
