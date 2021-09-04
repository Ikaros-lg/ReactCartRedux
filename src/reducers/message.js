import * as types from '../constants/messageType';


var inititalState = types.welcomeC;

const reducer = (state = inititalState, action) => {
    switch(action.type){
        case types.addC:
            return types.addC;
        case types.deleteC:
            return types.deleteC;
        case types.updateC:
            return types.updateC;
        default:
            return state;
    }
}

export default reducer;