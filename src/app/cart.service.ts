import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class CartService {
    items = [];
    constructor() { }

    addToCart(product) {
        this.items.push(product);
    }
    getItems() {
        return this.items;
    }

    clearCart() {
        this.items = [];
        return this.items;
    }

    removeItem(id) {
        this.items.splice(id, 1)
        return this.items
    }

}