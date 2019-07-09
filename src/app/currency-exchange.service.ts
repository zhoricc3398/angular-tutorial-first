import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { data } from './currencies';
import { Observable, from } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CurrencyExchangeService {
  currencies;
  Observer;

  constructor(private httpClient: HttpClient) {
    this.currencies = data;
  }
}
