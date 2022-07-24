const initialData = {
  list: [],
};

const addFilter = (state = initialData, action) => {
  switch (action.type) {
    case "Add_to_filter":
      const { data, id } = action;
      for (let i = 0; i < state.list.length; i++) {
        const element = state.list[i];
        if (element.data.innerHTML === data.innerHTML) {
          return state;
        }
      }
      return {
        ...state,
        list: [...state.list, { data, id }],
      };
    case "removeFilter":
      const newArray = state.list.filter((arr) => arr.id !== action.index);
      return {
        ...state,
        list: newArray,
      };
    case "clearAll":
      return {
        ...state,
        list: [],
      };
    default:
      return state;
  }
};

export default addFilter;
