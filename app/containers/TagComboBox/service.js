import React from 'react';

const getFilterList = function getFilterList(items, searchText, splitListOn) {
  return items
    .slice(splitListOn - 2)
    .filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
};

const getItems = function(items, splitListOn, favourites) {
  const index = items.findIndex(x => x.id === 0);
  let newArray = [];
  if (favourites && favourites.length > 0) {
    newArray.push({ id: -1, name: 'favourites' })
  }
  if (index === -1) {
    newArray.push({ id: 0, name: 'all' });
  }
  const pending = items.slice(0, splitListOn - 2);
  newArray.push(...pending);

  return newArray;
};

export { getFilterList, getItems };
