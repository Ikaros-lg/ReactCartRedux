import * as types from '../constants/productType';
import * as types2 from '../constants/messageType';

//cart
export const addToCart = (product) => {
    return {
        type : types.addToCart,
        product : product,
        quantity : 1,
    }
}

export const deleteFromCart = (id) => {
    return {
        type : types.deleteFromCart,
        id : id
    }
}

export const minusFromCart = (id) => {
    return {
        type : types.minus,
        id : id,
    }
}

export const plusFromCart = (id) => {
    return {
        type : types.plus,
        id : id,
    }
}

//message
export const addMess = () => {
    return {
        type : types2.addC,
    }
}

export const deleteMess = () => {
    return {
        type : types2.deleteC,
    }
}

export const updateMess = () => {
    return {
        type : types2.updateC,
    }
}

 