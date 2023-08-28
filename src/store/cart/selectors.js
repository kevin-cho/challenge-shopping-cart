import { createSelector } from 'reselect'

const getItems = state => state.cart.items;

const getIsOpen = state => state.cart.isOpen;

export const getCartQuantity = createSelector(getItems, items => items.length || 0);

/**
 * Get list of unique cart items each with quantity
 */
export const getCartItemsWithQuantity = createSelector(getItems, items => {
  const result = {}
  items.forEach(item => {
    if (result[item.id]) {
      result[item.id].quantity++;
    } else {
      result[item.id] = {
        ...item,
        quantity: 1,
      }
    }
  });
  return Object.values(result);
});

export const getCartTotal = createSelector(
  getItems,
  items => {
    const total = items.reduce((acc, curr) => acc + curr.price, 0);
    return Math.round(total * 100) / 100;
  }
)

export const getCartIsOpen = createSelector(getIsOpen, isOpen => isOpen);
