import { CartService } from './cart.service';

describe('Cart Service tests', () => {
  let service: CartService;

  beforeEach(() => {
    service = new CartService();
  })

  it('Default cart items should be empty', () => {
    expect(service.items.length).toBe(0);
  });

  it('Method addToCart should add item to items', () => {
    service.addToCart({ test: 'test' });
    expect(service.items[0].test).toBe('test');
  });

  it('Method getItems should return added item', () => {
    expect(service.getItems()).toBe(service.items)
  });

  it('Method clearCart should removes all items', () => {
    service.clearCart()
    expect(service.items.length).toBe(0)
    expect(service.clearCart()).toBe(service.items)
  })

  it('Method removeItem should remove specified item', () => {
    service.addToCart({ test: 'test' });
    service.addToCart({ test1: 'test1' });
    expect(service.removeItem(0)).toBe(service.items)
    expect(service.items.length).toBe(1)
    expect(service.items[0].test1).toBe('test1')
  })

});