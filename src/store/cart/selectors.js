import { createSelector } from 'reselect'

const getItems = state => state.cart.items;

const getIsOpen = state => state.cart.isOpen;

export const getCartQuantity = createSelector(getItems, items => items.length || 0);

export const getCartItems = createSelector(getItems, items => items);

export const getCartTotal = createSelector(
  getItems,
  items => {
    const total = items.reduce((acc, curr) => acc + curr.price, 0);
    return Math.round(total * 100) / 100;
  }
)

export const getCartIsOpen = createSelector(getIsOpen, isOpen => isOpen);
