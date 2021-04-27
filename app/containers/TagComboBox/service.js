import React from 'react';

const getFilterList = function getFilterList(items, searchText, splitListOn) {
  return items.slice(splitListOn - 2).filter(item => item.name.toLowerCase().includes(searchText.toLowerCase()));
}

const getItems = function(items, splitListOn) {

  //Adding all option, this value does not exists in the data source
  const index = items.findIndex(x => x.id === 0);
  if (index === -1) {
    items.splice(splitListOn - 2, 0, { id: 0, name: "all" });
  }

  return items.slice(0, splitListOn - 2);
}

export { getFilterList, getItems }
