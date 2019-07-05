import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
import { CartService } from './../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  items;
  checkedForm;
  constructor(private cartService: CartService, private formBuilder: FormBuilder) {
    this.items = this.cartService.getItems()

    this.checkedForm = formBuilder.group({
      name: ['', Validators.minLength(2)],
      address: formBuilder.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      })
    });
  }

  ngOnInit() {
  }

  clearCart() {
    this.cartService.clearCart()
    this.items = this.cartService.getItems()
  }

  removeItem(id) {
    this.items = this.cartService.removeItem(id)
  }

  onSubmit(value) {
    console.log(value)

    this.checkedForm.reset();
  }

  resetForm() {
    this.checkedForm.patchValue({
      name: 'Zhoricc'
    });
  }
}
