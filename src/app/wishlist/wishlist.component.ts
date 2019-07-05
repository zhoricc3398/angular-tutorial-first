import { Component, OnInit } from '@angular/core';
import { WishlistService } from '../wishlist.service';

@Component({
  selector: 'app-wishlist',
  templateUrl: './wishlist.component.html',
  styleUrls: ['./wishlist.component.scss']
})
export class WishlistComponent implements OnInit {
  items;

  constructor(private wishlistService: WishlistService) {
    this.items = this.wishlistService.getItems()
  }

  ngOnInit() {
  }

  addToWishlist(product) {
    this.items.push(product);
  }

  removeFromWishlist(id) {
    this.items.splice(id, 1)
    return this.items
  }

  checkItem(product) {
    return this.wishlistService.checkItem(product)
  }
}
