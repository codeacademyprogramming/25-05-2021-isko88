import callApi from '../api'
export const getDataFromApi = () => {
    return (dispatch) => {
        return callApi('GET', null).then(res => {
            dispatch(GetAllProduct(res.data));
        });
    }
}
export function GetAllProduct(payload) {
    return {
        type: 'GET_ALL_PRODUCT',
        payload
    }
}
export function GetNumberCart() {
    return {
        type: 'GET_NUMBER_CART'
    }
}
export function AddCart(payload) {
    return {
        type: 'ADD_CART',
        payload
    }
}
export function UpdateCart(payload) {
    return {
        type: 'UPDATE_CART',
        payload
    }
}
export function DeleteCart(payload) {
    return {
        type: 'DELETE_CART',
        payload
    }
}

export function IncreaseQuantity(payload) {
    return {
        type: 'INCREASE_QUANTITY',
        payload
    }
}
export function DecreaseQuantity(payload) {
    return {
        type: 'DECREASE_QUANTITY',
        payload
    }
}