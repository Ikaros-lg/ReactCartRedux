import { combineReducers } from "redux";
import product from './products';
import cart from './cart';
import message from './message';

const reducer = combineReducers({
    product : product,
    cart : cart,
    message : message,
});

export default reducer;