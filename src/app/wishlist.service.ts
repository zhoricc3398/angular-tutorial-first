import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class WishlistService {
    wishlist = [];
    constructor() { }

    getItems() {
        return this.wishlist;
    }

    addToWishlist(product) {
        this.wishlist.push(product);
    }

    clearWishlist() {
        this.wishlist = [];
        return this.wishlist;
    }

    removeItem(id) {
        this.wishlist.splice(id, 1)
        return this.wishlist
    }

    checkItem(product) {
        return this.wishlist.includes(product)
    }

}