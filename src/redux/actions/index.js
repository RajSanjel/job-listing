export const addToFilter = (filterData) => {
  return {
    type: "Add_to_filter",
    data: filterData,
    id: new Date().getTime().toString(),
  };
};
export const removeFilter = (index) => {
  return {
    type: "removeFilter",
    index: index,
  };
};

export const clearAll = () => {
  return {
    type: "clearAll",
  };
};
