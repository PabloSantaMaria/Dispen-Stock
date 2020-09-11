import {createSelector} from 'reselect';

const selectStock = state => state.stock;

export const selectItems = createSelector(
  [selectStock],
  stock => stock.items
);

export const selectSearchString = createSelector(
  [selectStock],
  stock => stock.searchString
);

export const selectItemsTotal = createSelector(
  [selectItems],
  items => items.reduce((accumTotal, item) => accumTotal + item.quantity, 0)
);