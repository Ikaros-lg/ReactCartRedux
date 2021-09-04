import * as types from "../constants/productType";

var products = JSON.parse(localStorage.getItem("cartLocal"));
var initialState = products ? products : [];


const reducer = (state = initialState, action) => {
  switch (action.type) {
    case types.addToCart:
      var index = findProduct(state, action.product.id);
      if (index === -1) {
        state.push({
          product: action.product,
          quantity: action.quantity,
        });
      } else {
        state[index].quantity += action.quantity;
      }
      localStorage.setItem('cartLocal', JSON.stringify(state));
      return [...state];
      
    case types.deleteFromCart:
      var index = findProduct(state, action.id);
      if (index !== -1) {
        state.splice(index,1);
      } 
      localStorage.setItem('cartLocal', JSON.stringify(state));
      return [...state];

    case types.minus:
      var index = findProduct(state, action.id);
      if (index !== -1) {
        state[index].quantity--;
      }
      if(state[index].quantity === 0){
        state.splice(index,1);
      } 
      localStorage.setItem('cartLocal', JSON.stringify(state));
      return [...state];

    case types.plus:
      var index = findProduct(state, action.id);
      if (index !== -1) {
        state[index].quantity++;
      }
      if(state[index].quantity > state[index].product.inventory){
        state[index].quantity = state[index].product.inventory;
      } 
      localStorage.setItem('cartLocal', JSON.stringify(state));
      return [...state];

    default:
      return state;
  }
};

var findProduct = (state, id) => {
  var result = -1;
  if(state.length > 0){
    state.forEach((item, index) => {
        if (item.product.id === id) result = index;
      });
  }
  return result;
};

export default reducer;
