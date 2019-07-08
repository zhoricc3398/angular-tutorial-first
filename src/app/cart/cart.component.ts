import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormControl, FormGroup } from '@angular/forms'
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
      name: ['', [Validators.minLength(4), this.forbiddenName()]],
      address: formBuilder.group({
        street: '',
        city: '',
        state: '',
        zip: ''
      }, {
        validators: this.crossValidation
      })
    });
  }

  ngOnInit() {
  }

  crossValidation(formGroup) {
    const zip = formGroup.get('zip').value;
    const zipStatus = CartComponent.isZipOk(zip);

    const city = formGroup.get('city').value;
    const cityStatus = CartComponent.isCityOk(city);

    return zipStatus && cityStatus ? null : { zipStatus, cityStatus };

  }

  static isZipOk(zip) {
    return zip.length < 3;
  }

  static isCityOk(city) {
    return city.charAt(0).toLowerCase() !== 'a'
  }

  forbiddenName() {
    return (formControl) => {
      return formControl.value === 'Zhoricc' ? {forbidden: {invalid: true}} : null;
    }
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

  get name() {
    return this.checkedForm.get('name') as FormControl;
  }

  get address() {
    return this.checkedForm.get('address') as FormGroup;
  }
}
