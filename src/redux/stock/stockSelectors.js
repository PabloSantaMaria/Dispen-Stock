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