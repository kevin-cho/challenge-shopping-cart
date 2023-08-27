import { createSelector } from 'reselect'

const getItemsRoot = state => state.products.items;

export const getProducts = createSelector(getItemsRoot, items => items);
