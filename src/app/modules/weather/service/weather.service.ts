import { WeatherDatas } from 'src/app/models/interfaces/WeatherDatas';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private apiKey = '1d637a87edeb00bfdce451cd190a9b86';
  constructor(private http: HttpClient) { }

  getWeathersDatas(cityName: String): Observable<WeatherDatas> {
    return this.http.get<WeatherDatas>(`https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&APPID=${this.apiKey}`)

  }

}
