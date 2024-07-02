import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
myApiKey = 'api-key'; // generate api key from www.weatherapi.com
  constructor(private http: HttpClient) { }

  getWeatherData(location: string) {
    return this.http.get('https://api.weatherapi.com/v1/current.json?q='+location+'&key='+this.myApiKey)
  }
}
