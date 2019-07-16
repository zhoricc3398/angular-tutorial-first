import { WishlistService } from './wishlist.service';

describe('Wishlsit Service tests', () => {
  let service: WishlistService;

  beforeEach(() => {
    service = new WishlistService();
  })

  it('Default wishlist should be empty', () => {
    expect(service.wishlist.length).toBe(0);
  });

  it('Method getItems should return added items', () => {
    expect(service.getItems()).toBe(service.wishlist)
  });

  it('Method addToWishlist should add item to wishlist', () => {
    service.addToWishlist({ test: 'test' });
    expect(service.wishlist[0].test).toBe('test');
  });

  it('Method clearWishList should removes all items', () => {
    service.clearWishlist()
    expect(service.wishlist.length).toBe(0)
    expect(service.clearWishlist()).toBe(service.wishlist)
  })

  it('Method removeItem should remove specified item', () => {
    service.addToWishlist({ test: 'test' });
    service.addToWishlist({ test1: 'test1' });
    expect(service.removeItem(0)).toBe(service.wishlist)
    expect(service.wishlist.length).toBe(1)
    expect(service.wishlist[0].test1).toBe('test1')
  })

  it('Method checkItem should return true if we have item', () => {
    const test = { test: 'test' };
    service.addToWishlist(test);
    expect(service.checkItem(test)).toBe(true)
  })

});