import { Component, OnInit } from '@angular/core';
import { data } from '../currencies';
import { FormBuilder } from '@angular/forms';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-currency-exchange',
  templateUrl: './currency-exchange.component.html',
  styleUrls: ['./currency-exchange.component.scss']
})
export class CurrencyExchangeComponent implements OnInit {
  currencies;
  exchangeForm;
  Observer;
  base;
  symbol;
  baseInput;
  symbolInput;

  constructor(private formBuilder: FormBuilder, private http: HttpClient) {
    this.currencies = data;
    this.Observer = new Observable(this.changeValue);
    this.exchangeForm = formBuilder.group({
      currency1: [],
      currency2: []
    })
    this.exchangeForm.get('currency1').valueChanges.subscribe(() => this.changeValue('base'));
  }

  ngOnInit() {
  }

  selectCurrency(event, type) {
    if (type === 'base') {
      this.base = event.target.value;
    }
    if (type === 'symbol') {
      this.symbol = event.target.value;
    }
  }
  
  changeValue(input) {
    if (this.base && this.symbol) {
      let url = '';
      if (input === 'base') {
        this.baseInput = this.exchangeForm.get('currency1').value;
        url = `https://api.exchangeratesapi.io/latest?base=${this.base}&symbols=${this.symbol}`;
      }
      this.http.get(url).subscribe(value => {
        this.update(value, input);
      });
    }
  }

  update(value, input) {
    if ( input === 'base' ) {
      this.symbolInput = (this.baseInput || 1) * value.rates[this.symbol];
    }
  }
}
