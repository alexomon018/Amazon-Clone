export const initalState = {
  basket: [],
  user: null
};
export const getBasketTotal= (basket)=>{
  return basket?.reduce((amount,item)=>item.price + amount,0);
}

const reducer = (state, action) => {
  console.log(action);
  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user
      }
    case "ADD_TO_BASKET":
      //Logic for adding item to basket
      return {
        ...state,
        basket: [...state.basket, action.item],
      };
      break;
    case "REMOVE_FROM_BASKET":
      //Logic for removing item to basket

      //clone the basket
      let newBasket = [...state.basket];

      //check to se if the product exists
      const index = state.basket.findIndex((basketItems) => {
        return basketItems.id === action.id;
      });
      if (index >= 0) {
        //item exits in basket remove it
        newBasket.splice(index, 1);
      } else {
        console.warn(
          `Cant remove product (id: ${action.id}) as its not existant`
        );
      }
      return { ...state, basket: newBasket };
      break;

    default:
      return state;
  }
};

export default reducer;
