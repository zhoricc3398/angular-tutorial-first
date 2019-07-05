import { Component } from '@angular/core';

import { products } from '../products';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent {
  products = products;

  constructor(private wishlistService: WishlistService) { }

  share() {
    window.alert('The product has been shared');
  }

  onNotify() {
    window.alert('You will be notified!');
  }

  addToWishlist(product) {
    window.alert('Your product has been added!');
    this.wishlistService.addToWishlist(product);
  }

  removeFromWishlist(id) {
    return this.wishlistService.removeItem(id)
  }

  checkItem(product) {
    return this.wishlistService.checkItem(product)
  }
}
