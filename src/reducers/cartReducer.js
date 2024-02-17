const initialState = {
  cartData: [],
};

const cartReducer = (state, action) => {
  switch (action.type) {
    case "add-to-cart": {
      return { cartData: [...state.cartData, action.movie] };
    }

    case "remove-to-cart": {
      return {
        ...state,
        cartData: state.cartData.filter((x) => x.id != action.id),
      };
    }
  }
  throw Error("Unknown action: " + action.type);
};

export { cartReducer, initialState };
